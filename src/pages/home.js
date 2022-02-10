import React from "react";
import { BiSearch } from "react-icons/bi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";
import User from "../components/User";
import Details from "../components/Details";
import Loading from "../loading.gif";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Input = styled("input")({
  border: "none",
  marginLeft: 10,
  width: "100%",
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
});
const SearchContainer = styled("div")({
  display: "flex",
  border: "1px solid #b1b0b0",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 20px",
  borderRadius: "12px",
  width: "10rem",
});

const Header = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "-webkit-sticky",
  top: 0,
  padding: "5px 100px",
  paddingBottom: "15px",
  width: "100%",
  boxSizing: "border-box",
  position: "sticky",
  backgroundColor: "white",
});

export default function Home() {
  const [users, setUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [singleUser, setSingleUser] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [check, setCheck] = React.useState(true);

  const [ref, setRef] = React.useState(null);
  const getUsers = (page) => {
    fetch(`https://randomuser.me/api/?page=${page}&results=50`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data.results);
        setUsers((user) => [...user, ...data.results]);
        if (data.results.length < 50) {
          setCheck(false);
        }
        // setLoading(true)
      })
      .catch((error) => {
        toast.error(error.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  React.useEffect(() => {
    getUsers(page);
    console.log("Page > ", page);
  }, [page]);
  React.useEffect(() => {
    console.log("Single user >", search);
  }, [search]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entery]) => {
        console.log("observer > ", entery);
        if (entery.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "1900px" }
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
      <Header>
        <h3>Address Book App </h3>

        <SearchContainer>
          <BiSearch />
          <Input
            placeholder="Search Icon"
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchContainer>
      </Header>
      <br />
      <div style={{ padding: "0px 50px" }}>
        <User users={users} search={search} displayDetails={displayDetails} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Details singleUser={singleUser} />
        </Box>
      </Modal>
      <div style={{ backgroundColor: "#1c273c" }}>
        {check ? (
          <div style={{ margin: 10 }}>
            <img src={Loading} ref={setRef} />
          </div>
        ) : (
          <h3>No more user</h3>
        )}
        {check ? (
          <>
            <h3>{users.length}</h3>
            <div onClick={() => setPage((page) => page + 1)} ref={setRef}>
              Loading more...
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
