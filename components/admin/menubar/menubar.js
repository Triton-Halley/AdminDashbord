import Link from "next/link";
import Image from "next/image";
import classes from "./menubar.module.css";
//logo
import Planet from "../../../assets/Images/planets.png";
const Menubar = () => {
  const logoutHandler = () => {
    //TODO
  };
  return (
    <>
      <div className={classes.menubarContainer}>
        <div className={classes.logo}>
          <Image src={Planet} alt={"Logo"} width={45} height={45} />
          <span>Triton</span>
          <p>Dashboard</p>
        </div>

        <nav className={classes.menuList}>
          <ul>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SvgIcon}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
                <Link href="#">Overview</Link>
              </div>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SvgIcon}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <Link href="#">Users</Link>
              </div>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SvgIcon}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <Link href="#">Blog</Link>
              </div>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SvgIcon}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <Link href="#">Product</Link>
              </div>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SvgIcon}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <Link href="#">Setting</Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className={classes.account}>
          <div onClick={logoutHandler} className={classes.logoutBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={[classes.SvgIcon, classes.logoutIcon].join(" ")}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout button
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
