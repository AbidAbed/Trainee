import React, { useState } from "react";

function Signup() {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cv, setCV] = useState("");
  const [name, setName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [GPA, setGPA] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "student") {
      // Perform student signup logic here
      console.log("Student Signup data:", {
        email,
        password,
        cv,
        name,
        fieldOfStudy,
        academicYear,
        GPA,
        phoneNumber,
      });
    } else if (userType === "company") {
      // Perform company signup logic here
      console.log("Company Signup data:", {
        name,
        description,
        email,
        password,
        phoneNumber,
        location,
      });
    }
    // Reset form fields
    setEmail("");
    setPassword("");
    setCV("");
    setName("");
    setFieldOfStudy("");
    setAcademicYear("");
    setGPA("");
    setPhoneNumber("");
    setDescription("");
    setLocation("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        className="flex flex-col items-center p-8 rounded bg-white shadow"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Signup</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`py-2 px-4 mr-2 rounded ${
              userType === "student" ? "bg-blue-700 text-white" : "bg-gray-400"
            }`}
            onClick={() => handleUserTypeChange("student")}
          >
            Student
          </button>
          <button
            className={`py-2 px-4 rounded ${
              userType === "company" ? "bg-blue-900 text-white" : "bg-gray-400"
            }`}
            onClick={() => handleUserTypeChange("company")}
          >
            Company
          </button>
        </div>
        {userType === "student" && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="CV (Upload Link)"
              value={cv}
              onChange={(e) => setCV(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Field of Study"
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Academic Year"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="GPA"
              value={GPA}
              onChange={(e) => setGPA(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
          </>
        )}
        {userType === "company" && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-64 p-3 mb-3 rounded"
            />
          </>
        )}
        <button
          type="submit"
          className="py-3 px-6 bg-blue-900 text-white rounded cursor-pointer"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
