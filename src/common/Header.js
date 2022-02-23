import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "antd";

export default function Header({ pageType, userSearch, search }) {
  if (pageType === "home") {
    return (
      <div className="homeHeader">
        <div className="heading">
          <h3>Address Book App </h3>

          <Link to={"/setting"} style={{ textDecoration: "none" }}>
            <Button variant="outlined">Setting</Button>
          </Link>
        </div>
        <br />
        <div className="searchBar">
          <Input
            placeholder="Search Name"
            value={search}
            onChange={(event) => userSearch(event.target.value)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="settingHeader">
        <h2>Setting Page</h2>

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="outlined">Home</Button>
        </Link>
      </div>
    );
  }
}
