import React from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import images from "~/assets/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img alt="TikTok" src={images.logo} />
        </div>
        <div className={styles.search}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={styles.clear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={styles.loading} icon={faSpinner} />

          <button className={styles.search_btn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={styles.actions}></div>
      </div>
    </header>
  );
}

export default Header;
