import React, { useState, ChangeEvent } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { updatePersonalDetails } from "@/app/actions/ProfilePageActions";
import "./PersonalDetails.scss";

interface UserDetailsProps {
  details: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

const PersonalDetails = ({
  details: { id, firstName, lastName, email },
}: UserDetailsProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    id,
    firstName,
    lastName,
    email,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = async () => {
    // Update user data using prisma
    updatePersonalDetails(userData);
    console.log("Saving data:", userData);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setUserData({ id, firstName, lastName, email }); // Reset to original data
    setIsEdit(false);
  };

  return (
    <div className="dashboardCard">
      <div className="headingFlex">
        <h2 className="dashboardHeading">My Details</h2>
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
          <div className="dashboardButtons">
            <button type="button" onClick={handleSave}>
              <DoneIcon />
            </button>
            <button type="button" onClick={handleCancel}>
              <CloseIcon />
            </button>
          </div>
        </form>
      ) : (
        <div className="dashboardDetailsDisplay">
          <div className="dashboardDetailsFlex">
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
