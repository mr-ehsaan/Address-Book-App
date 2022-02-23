import React from "react";
import DropDown from "../components/DropDown";
import Header from "../common/Header";
import { setNationality } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";

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
      <Header pageType="setting" />
      <DropDown changeNat={changeNat} nat={nat} />
    </div>
  );
}

export default SettingContainer;
