import Menubar from "./menubar/menubar";
import classes from "./admin.module.css";
const AdminPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div>
          <Menubar />
        </div>
        <div className={classes.page}>page</div>
      </div>
    </>
  );
};

export default AdminPage;
