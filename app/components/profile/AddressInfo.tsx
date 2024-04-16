import React, { useState, ChangeEvent } from "react";
import { updateAddressInfo } from "@/app/actions/ProfilePageActions";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

interface UserAddressInfo {
  addressData: {
    id: string;
    firstName: string;
    lastName: string;
    address: string | null;
  };
}

const AddressInfo = ({
  addressData: { id, firstName, lastName, address },
}: UserAddressInfo) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    id,
    firstName,
    lastName,
    address,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = async () => {
    //Save user data to the database using prisma
    updateAddressInfo(userData);

    console.log("Saving data:", userData);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setUserData({ id, firstName, lastName, address }); // Reset to original data
    setIsEdit(false);
  };

  return (
    <div className="dashboardCard">
      <div className="headingFlex">
        {/* <div className="addressData"> */}
        <h2 className="dashboardHeading">My Address</h2>
        <button type="button" onClick={handleEdit}>
          <CreateOutlinedIcon />
        </button>
      </div>
      {isEdit ? (
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="address"
              id="address"
              name="address"
              value={userData.address ?? ""} // Add nullish coalescing operator
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
        <div>
          <p className="nameHeadings">First Name</p>
          <p>{userData.firstName}</p>
          <p className="nameHeadings">Last Name</p>
          <p>{userData.lastName}</p>
          <p className="nameHeadings">Address</p>
          <p>{userData.address}</p>
        </div>
      )}
    </div>
    // </div>
  );
};

export default AddressInfo;
