// src/pages/Admin/Doctors.jsx
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Sidebar from "../components/SideBar/Sidebar"; // Adjust the import path as needed
import doc1 from "../assets/doc1.jpg";

const Doctors = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [doctors, setDoctors] = useState([
    {
      docAvatar: { url: doc1 },
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      dob: "1980-06-15T00:00:00Z",
      doctorDepartment: "Cardiology",
      nic: "123456789",
      gender: "Male",
    },
    {
      docAvatar: { url: doc1 },
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      dob: "1975-02-20T00:00:00Z",
      doctorDepartment: "Neurology",
      nic: "987654321",
      gender: "Female",
    },
    // Add more static data as needed
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="page doctors">
      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1>CAREGIVERS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element, index) => {
            return (
              <div key={index} className="card">
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
