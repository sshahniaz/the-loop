"use client";
import React from "react";
import styles from "./ContactComponent.module.scss"; // Import SCSS styles

interface ContactComponentProps {}

const Contact: React.FC<ContactComponentProps> = () => {
  return (
    <div className={styles.contact}>
      <h2>Can&apos;t Find What You&apos;re Looking For? Contact Us!</h2>
      <div className="phone-help">
        <h3>Telephone</h3>
        <p>(01245) 123 456</p>
        <h6>
          Calls from UK landlines & mobiles are free. Our customer service
          opening hours are:
          <span>Monday-Friday: 8am-6pm</span>
          <span>Saturday-Sunday: 10am-4pm</span>
        </h6>
      </div>
      <div className="emailHelp">
        <h3>Email</h3>
        <p>enquiries@theloop.com</p>
        <h6>Please allow 1-2 working days for a response.</h6>
      </div>
      <div className="terms-help">
        <h3>Terms &amp; Conditions</h3>
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
