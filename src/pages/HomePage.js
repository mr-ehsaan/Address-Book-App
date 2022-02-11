import React, { useState, useEffect } from "react";

import User from "../components/User.component";
import getUsers from "../Services/HomeService";
import Header from "../components/Header.component";
import Footer from "../components/Footer.compoenent";
import Popup from "../components/Popup.component";

export default function Home({ nat }) {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [singleUser, setSingleUser] = useState(null);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [check, setCheck] = useState(true);

  const [ref, setRef] = useState(null);

  useEffect(async () => {
    let res = await getUsers(`?page=${page}&results=50&nat=${nat}`);
    setUsers((user) => [...user, ...res.results]);
    if (res.results.length < 50) {
      setCheck(true);
    }
  }, [page, nat]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entery]) => {
        if (entery.isIntersecting) {
          setPage((next) => next + 1);
        }
      },
      { rootMargin: "900px" }
    );
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  const displayDetails = (user) => {
    console.log(user);
    setSingleUser(user);
    setOpen(true);
  };

  return (
    <>
      <Header setSearch={setSearch} />
      <br />
      <div style={{ padding: "0px 50px" }}>
        <User users={users} search={search} displayDetails={displayDetails} />
      </div>

      <Popup singleUser={singleUser} open={open} handleClose={handleClose} />

      <div style={{ backgroundColor: "#1c273c" }}>
        {check ? (
          <Footer users={users} setRef={setRef} setPage={setPage} />
        ) : (
          <h3>No more user</h3>
        )}
      </div>
    </>
  );
}
