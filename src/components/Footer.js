import React from "react";
import loading from "../assets/icons/loading.gif";

export default function Footer({ count, isLoading, setObserve }) {
  return (
    <div
      style={{ backgroundColor: "#1c273c", color: "white" }}
      ref={setObserve}
    >
      {isLoading ? (
        <>
          <div style={{ margin: 10 }}>
            <img src={loading} alt="" />
          </div>
          <div>Total: {count}</div>
          <div>Loading more...</div>
        </>
      ) : (
        <div>No more user</div>
      )}
    </div>
  );
}
