import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./PersonalDetails.scss";
interface userDetails {
  details: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const PersonalDetails = ({
  details: { firstName, lastName, email },
}: userDetails) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName,
    lastName,
    email,
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
    setUserData({ firstName, lastName, email }); // Reset to original data
    setIsEdit(false);
  };

  return (
    <div className="personalDetails">
      <div className="headingFlex">
        <h2 className="personalDetailsHeading">My Details</h2>
        <button type="button" onClick={handleEdit}>
          <EditIcon />
        </button>
      </div>
      {isEdit ? (
        <form>
          <div>
            <label className="nameHeadings" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="nameHeadings">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="nameClass"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="nameHeadings">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="nameClass"
              value={userData.email}
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
        <div className="personalDetailsDisplay">
          <div className="personalDetailsFlex">
            <p className="nameHeadings">First Name </p>
            <p>{userData.firstName}</p>
          </div>

          <p className="nameHeadings">Last Name</p>
          <p>{userData.lastName}</p>

          <p className="nameHeadings">Email</p>
          <p>{userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
