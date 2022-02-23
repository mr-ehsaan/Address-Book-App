import React from "react";

import { Table } from "antd";

const User = ({ data }) => {
  console.log("Data of users > ", data);
  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      width: 100,
      fixed: "left",
    },
    {
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      width: 100,
      fixed: "right",
    },
  ];
  return (
    <div style={{ padding: "0px 50px" }}>
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
};
export default User;
