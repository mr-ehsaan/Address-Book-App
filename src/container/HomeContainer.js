import React, { useState, useEffect } from "react";

import User from "../components/Users";
import Header from "../common/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  loadUsers,
  setUserDetails,
  setUserSearch,
} from "../redux/actions/userActions";

function HomeContainer() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setOpen(false);
  // const [isLoading, setIsLoading] = useState(true);

  const [observe, setObserve] = useState(null);
  const users = useSelector((state) => state.userData.users);
  const apiCall = useSelector((state) => state);

  const page = useSelector((state) => state.userData.pagination.currentPage);
  const perPage = useSelector((state) => state.userData.pagination.perPage);
  const nat = useSelector((state) => state.userData.nat);
  const search = useSelector((state) => state.userData.search);
  const singleUser = useSelector((state) => state.userData.userDetails);
  const isLoading = useSelector((state) => state.userData.isLoading);

  useEffect(() => {
    console.log("IsLoading  > ", isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (users && search) {
      let sourceData = users
        .filter((user) => {
          return (user.name.first + user.name.last).includes(search);
        })
        .map((user, index) => ({
          key: index,
          thumbnail: <img src={user.picture.thumbnail} alt="" />,
          firstName: user.name.first,
          lastName: user.name.last,
          username: user.login.username,
          email: user.email,
          details: (
            <Button
              type="primary"
              variant="outlined"
              size="medium"
              onClick={() => displayDetails(user)}
            >
              {" "}
              Details
            </Button>
          ),
        }));
      setData(sourceData);
    } else if (users && !search) {
      let sourceData = users.map((user, index) => ({
        key: index,
        thumbnail: <img src={user.picture.thumbnail} alt="" />,
        firstName: user.name.first,
        lastName: user.name.last,
        username: user.login.username,
        email: user.email,
        details: (
          <Button
            type="primary"
            variant="outlined"
            size="medium"
            onClick={() => displayDetails(user)}
          >
            {" "}
            Details
          </Button>
        ),
      }));
      setData(sourceData);
    }
  }, [search, users]);

  useEffect(() => {
    console.log("Users in Redux>>", users, " and apiCall > ", apiCall);
    console.log("Page No. inside HomeContainer > ", page, " Nat > ", nat);
  }, [users, apiCall]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entery]) => {
        if (entery.isIntersecting && page <= 20) {
          console.log("Dispatch pass > ");
          dispatch(loadUsers(page, perPage, nat));
        }
      },
      { rootMargin: "2000px" }
    );
    if (observe) {
      observer.observe(observe);
    }
    return () => {
      if (observe) {
        observer.unobserve(observe);
      }
    };
  }, [observe, page, perPage, nat]);

  const displayDetails = (user) => {
    dispatch(setUserDetails(user));
    setOpen(true);
  };

  const userSearch = (value) => {
    dispatch(setUserSearch(value));
  };

  return (
    <>
      <Header pageType={"home"} userSearch={userSearch} search={search} />

      <User data={data} />

      <Popup singleUser={singleUser} open={open} handleClose={handleClose} />

      <Footer
        count={users.length}
        isLoading={isLoading}
        setObserve={setObserve}
      />
    </>
  );
}

export default HomeContainer;
