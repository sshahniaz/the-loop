"use client";
import React from "react";
import styles from "./ContactComponent.module.scss"; // Import SCSS styles

interface ContactComponentProps {}

const Contact: React.FC<ContactComponentProps> = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contactHeading}>
        Can&apos;t Find What You&apos;re Looking For? Contact Us!
      </h2>
      <div className={styles.telephoneSection}>
        <div className={styles.contactSubHeading}>
          <h3>Telephone</h3>
        </div>
        <p>(01245) 123 456</p>
        <h6>
          Calls from UK landlines & mobiles are free. Our customer service
          opening hours are:
          <span>Monday-Friday: 8am-6pm</span>
          <span>Saturday-Sunday: 10am-4pm</span>
        </h6>
      </div>
      <div className={styles.emailSection}>
        <div className={styles.contactSubHeading}>
          <h3>Email</h3>
        </div>
        <p>enquiries@theloop.com</p>
        <h6>Please allow 1-2 working days for a response.</h6>
      </div>
      <div className={styles.termsConditions}>
        <h2 className={styles.termsConditionsHeading}>
          Terms &amp; Conditions
        </h2>
        <p>
          You can view the terms and conditions{" "}
          <u>
            <i>here.</i>
          </u>
        </p>
      </div>
    </div>
  );
};

export default Contact;
