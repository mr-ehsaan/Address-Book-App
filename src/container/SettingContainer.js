import React from "react";
import DropDown from "../components/DropDown.jsx";
import Header from "../common/Header.jsx";
import { setNationality } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import ErrorBoundary from "../common/ErrorBoundary.jsx";

function SettingContainer() {
  const nat = useSelector((state) => state.userData.nat);
  const dispatch = useDispatch();

  const changeNat = (value) => {
    dispatch(setNationality(value));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      }}
    >
      <ErrorBoundary>
        <Header pageType="setting" />
      </ErrorBoundary>
      <ErrorBoundary>
        <DropDown changeNat={changeNat} nat={nat} />
      </ErrorBoundary>
    </div>
  );
}

export default SettingContainer;
