import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import classNames from "classnames";
import styles from "./DefaultLayout.module.scss";
// const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
