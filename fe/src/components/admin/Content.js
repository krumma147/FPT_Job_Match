import React from "react";
import AdminFooter from "../../Share/Footer/AdminFooter";
import Navbar from "./NavBar";
import Dashboard from "./Dashboard";
import Footer from "../../Share/Footer/AdminFooter";
import OrderStatus from "./OrderStatus";
import TodoList from "./TodoList";
import Visitor from "./Visitor";
import TotalInCome from "./TotalInCome";
import SummaryRow from "./SummaryRow";
import TransactionHistory from "./TransactionHistory";
const Content = () => {
  // In this area could get all data from API then send to other routes
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <SummaryRow />

        <TransactionHistory />

        <TotalInCome />

        <OrderStatus />

        <TodoList />

        <Visitor />
      </div>

      <Footer />
    </div>
  );
};

export default Content;
