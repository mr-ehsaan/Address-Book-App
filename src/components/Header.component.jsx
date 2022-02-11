import React from "react";
import { styled } from "@mui/system";
import { BiSearch } from "react-icons/bi";
import Button from "@mui/material/Button";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

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

const Main = styled("div")({
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

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
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
export default function Header({ setSearch }) {
  return (
    <Container>
      <Main>
        <h3>Address Book App </h3>

        <SearchContainer>
          <BiSearch />
          <Input
            placeholder="Search Icon"
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchContainer>
      </Main>

      {/* <GrUserSettings /> */}
      <Link to={"/setting"} style={{ textDecoration: "none" }}>
        <Button variant="outlined" endIcon={<AiFillSetting />}>
          Setting
        </Button>
      </Link>
    </Container>
  );
}
