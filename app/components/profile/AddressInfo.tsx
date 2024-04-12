import React, { useState, ChangeEvent } from "react";
import { updateAddressInfo } from "@/app/actions/ProfilePageActions";
interface UserAddressInfo {
  addressData: {
    id: string;
    firstName: string;
    lastName: string;
    address: string | null;
  };
}

const AddressInfo = ({
  addressData: { id,firstName, lastName, address },
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
    setUserData({ id,firstName, lastName, address }); // Reset to original data
    setIsEdit(false);
  };

  return (
    <div className="addressData">
      <h2>Billing</h2>
      {isEdit ? (
        <form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Email:</label>
            <input
              type="address"
              id="address"
              name="address"
              value={userData.address ?? ""}  // Add nullish coalescing operator
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
            <strong>First Name:</strong> {userData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {userData.lastName}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressInfo;
