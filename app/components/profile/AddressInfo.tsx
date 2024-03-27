import React, { useState } from "react";

interface userAddressInfo {
  addressData: {
    firstName: string;
    lastName: string;
    address: string;
  };
}

const AddressInfo = ({
  addressData: { firstName, lastName, address },
}: userAddressInfo) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName,
    lastName,
    address,
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
    setUserData({ firstName, lastName, address }); // Reset to original data
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
              value={userData.address}
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
