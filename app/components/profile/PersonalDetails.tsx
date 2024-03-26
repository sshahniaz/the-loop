import React from "react";

interface userDetails {
  firstName: string;
  lastName: string;
  email: string;
}

const PersonalDetails = ({ firstName, lastName, email }: userDetails) => {
  // fetch data from database

  // render data from database
  // - map data

  return <div>PersonalDetails</div>;
};

export default PersonalDetails;
