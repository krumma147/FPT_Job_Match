import OrderStatus from "../Ultilities/OrderStatus";
import SummaryRow from "../Ultilities/SummaryRow";
import TodoList from "../Ultilities/TodoList";
import TotalInCome from "../Ultilities/TotalInCome";
import TransactionHistory from "../Ultilities/TransactionHistory";
import Visitor from "../Ultilities/Visitor";

const DashboardPanel = () => {
  return (
    <>
      <SummaryRow />

      <TransactionHistory />

      <TotalInCome />

      <OrderStatus />

      <TodoList />

      <Visitor />
    </>
  );
};

export default DashboardPanel;
