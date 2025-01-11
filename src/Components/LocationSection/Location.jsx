import React from 'react';
import styles from './Location.module.css';

const Location =  () =>  {
  return ( 
    <section className={styles.locContainer}>
      <header className={styles.sectionHeader}>
        <h3>Google Map</h3>
        <h1>Find Us With Map</h1>
      </header>
      <div className={styles.locImg}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4309.050247890726!2d72.68897031806968!3d23.218878895686682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bdd10281fa1%3A0xc3f3a36276b39c77!2sIIT%20Gandhinagar%20Research%20Park!5e1!3m2!1sen!2sin!4v1736585915904!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
       
      </div>
    </section>
  );
};

export default Location;
