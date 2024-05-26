import React, { useState } from "react";

function AccountInformation() {
  const [userInfo, setUserInfo] = useState({
    username: "Sungkyunkwan",
    studentId: "2024123123",
    password: "********",
    phone: "010-1234-1234",
    department: "Software",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Information:", userInfo);
    alert("Information Saved!");
  };

  return (
    <div className="account-information">
      <h1>Account Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Username
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            ID (Student ID)
            <input
              type="text"
              name="studentId"
              value={userInfo.studentId}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password
            <input
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone number
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Department
            <input
              type="text"
              name="department"
              value={userInfo.department}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AccountInformation;
