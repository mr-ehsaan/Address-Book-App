import React from "react";
import Loading from "../loading.gif";
export default function Footer({ users, setRef, setPage }) {
  return (
    <>
      <div style={{ margin: 10 }}>
        <img src={Loading} ref={setRef} />
      </div>
      <h3>{users.length}</h3>
      <div onClick={() => setPage((page) => page + 1)}>Loading more...</div>
    </>
  );
}
