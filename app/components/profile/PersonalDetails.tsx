import React, { useState } from "react";

interface userDetails {
  details: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const PersonalDetails = ({ details }: userDetails) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    details,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = () => {
    //impliment api later
    console.log("Saving data:", userData);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setUserData({ details }); // Reset to original data
    setIsEdit(false);
  };

  return (
    <div className="personalDetails">
      <h2>Personal Details</h2>
      {isEdit ? (
        <form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.details.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.details.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.details.email}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>First Name:</strong> {userData.details.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {userData.details.lastName}
          </p>
          <p>
            <strong>Email:</strong> {userData.details.email}
          </p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
