import React from "react";
import styles from "./Try.module.css";

const Try = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>CSS ONLY</h1>
          <img src="https://github.com/HoanghoDev/youtube_v2/blob/main/3d%20Rotate%20CSS%20Only/images/2.png?raw=true" alt="CSS Only" />
        </div>
        <div className={styles.author}>
          <h3>LUN DEV</h3>
          <div>
            <p>Design By</p>
            <p>Lun Dev</p>
          </div>
          <div>
            <p>Code By</p>
            <p>Lun Dev</p>
          </div>
          <img src="https://github.com/HoanghoDev/youtube_v2/blob/main/3d%20Rotate%20CSS%20Only/images/code.png?raw=true" alt="Code by Lun Dev" />
        </div>
      </header>
      <div className={styles.banner}>
        <div className={styles.product}>
          <div
            className={styles.soda}
            style={{ "--url": "url(https://github.com/HoanghoDev/youtube_v2/blob/main/3d%20Rotate%20CSS%20Only/images/bg.png?raw=true)" }}
          ></div>
          <div
            className={styles.soda}
            style={{ "--url": "url(https://github.com/HoanghoDev/youtube_v2/blob/main/3d%20Rotate%20CSS%20Only/images/bg2.png?raw=true)" }}
          ></div>
        </div>

        <div className={styles.rock}>
          <img src="https://github.com/HoanghoDev/youtube_v2/blob/main/3d%20Rotate%20CSS%20Only/images/rock1.png?raw=true" alt="Rock 1" />
          <img src="https://github.com/HoanghoDev/youtube_v2/blob/main/3d%20Rotate%20CSS%20Only/images/rock2.png?raw=true" alt="Rock 2" />
          <img src="https://github.com/HoanghoDev/youtube_v2/blob/main/3d%20Rotate%20CSS%20Only/images/rock3.png?raw=true" alt="Rock 3" />
        </div>
      </div>
    </div>
  );
};

export default Try;
