import React from 'react';

import useTitle from "../../hooks/useTitle";

// styles
import styles from "./BackendProgrammers.module.css";

// images
import programmer04 from "../../assets/programmers/programmer04.jpg";
import programmer05 from "../../assets/programmers/programmer05.jpg";
import programmer06 from "../../assets/programmers/programmer06.jpg";

const BackendProgrammers = () => {

  useTitle("Masoud | Backend Programmers");

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <img src={programmer04} alt="frontEndDebeloper" />
        <h2>James</h2>
        <p>From Michigan</p>
      </div>
      <div className={styles.contain}>
        <img src={programmer06} alt="frontEndDebeloper" />
        <h2>Nora</h2>
        <p>From Nebraska</p>
      </div>
      <div className={styles.contain}>
        <img src={programmer05} alt="frontEndDebeloper" />
        <h2>Samuel</h2>
        <p>From California</p>
      </div>
    </div>
  );
};

export default BackendProgrammers;