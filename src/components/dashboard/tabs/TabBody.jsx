import React from "react";
import Tab from "../../tab";
import BookList from "../BookList";
import Requests from "../requests";
import Users from "../Users";

const TabBody = ({ activeTab }) => {
  return (
    <>
      <Tab {...{ activeTab, tabName: "Requests" }}>
        <Requests />
      </Tab>
      <Tab {...{ activeTab, tabName: "BookList" }}>
        <BookList />
      </Tab>
      <Tab {...{ activeTab, tabName: "Users" }}>
        <Users />
      </Tab>
    </>
  );
};

export default TabBody;
