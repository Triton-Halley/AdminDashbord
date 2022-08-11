import Menubar from "./menubar/menubar";
import classes from "./admin.module.css";
import { useSelector } from "react-redux";
//pages
import Overview from "./overview/overview";
import Users from "./users/users";
import Blog from "./blog//blog";
import Product from "./product/product";
import Setting from "./setting/setting";
const AdminPage = () => {
  const currentPage = useSelector((state) => state.dashboard.currentPage);
  let page;
  switch (currentPage) {
    case "overview":
      page = <Overview />;
      break;
    case "users":
      page = <Users />;
      break;
    case "blog":
      page = <Blog />;
      break;
    case "product":
      page = <Product />;
      break;
    case "setting":
      page = <Setting />;
      break;
    default:
      page = <Overview />;
      break;
  }
  return (
    <>
      <div className={classes.container}>
        <div>
          <Menubar />
        </div>
        <div className={classes.page}>{page}</div>
      </div>
    </>
  );
};

export default AdminPage;
