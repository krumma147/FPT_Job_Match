import Content from "../../components/admin/Content";
import SideNav from "../../components/admin/SideNav";
import Navbar from "../../components/admin/NavBar";
import "../../styles/admin/assets/css/adminstyle.css";

const AdminMainPage = () => {
  return (
    <div class="container-scroller">
      <SideNav />
      <div class="container-fluid page-body-wrapper">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default AdminMainPage;
