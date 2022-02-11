import React from "react";
import DropDown from "../components/DropDown.component";
import Button from "@mui/material/Button";
import { BiArrowBack } from "react-icons/bi";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { list } from "../constants/const";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px 20px",
});

function SettingPage({ setNationality, nat }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      }}
    >
      <Container>
        <div></div>
        <h2>Setting Page</h2>

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="outlined" endIcon={<BiArrowBack />}>
            Home
          </Button>
        </Link>
      </Container>

      <DropDown list={list} setNationality={setNationality} nat={nat} />
    </div>
  );
}

export default SettingPage;
