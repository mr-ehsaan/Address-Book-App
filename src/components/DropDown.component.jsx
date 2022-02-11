import React from "react";

import { styled } from "@mui/system";
const Selectoption = styled("select")({
  border: "none",
  backgroundColor: "skyblue",
  color: "white",
  padding: "5px",
  width: "10%",
  height: "5re",
  borderRadius: "3px",
  margin: "5px 10px",
  cursor: "pointer",
});
const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
});

const Option = styled("option")({
  backgroundColor: "white",
  color: "black",
});

function DropDown({ list, setNationality, nat }) {
  return (
    <Container>
      <label for="cars">Select Nationality:</label>
      <Selectoption onChange={(event) => setNationality(event.target.value)}>
        {list
          ? list.map((li, index) => {
              return (
                <Option key={index} value={li} selected={nat === li}>
                  {" "}
                  {li}
                </Option>
              );
            })
          : ""}
      </Selectoption>
    </Container>
  );
}

export default DropDown;
