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
  const [observe, setObserve] = useState(null);

  const userState = useSelector((state) => state.userData);
  const pagination = useSelector((state) => state.userData.pagination);

  const { page, perPage } = pagination;
  const { users, nat, search, userDetails, isLoading } = userState;

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

      <Popup userDetails={userDetails} open={open} handleClose={handleClose} />

      <Footer
        count={users.length}
        isLoading={isLoading}
        setObserve={setObserve}
      />
    </>
  );
}

export default HomeContainer;
