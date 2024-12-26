import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Sidebar from "../components/SideBar/Sidebar"; // Adjust the import path as needed
import doc1 from "../assets/doc1.jpg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Patients = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [patients, setPatients] = useState([
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
      address: "Zootopia",
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
      address: "Madagascar",
    },
    // Add more static data as needed
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEdit = () => {
    //const patientToEdit = patients[index];
    //toast.info(`Editing patient: ${patientToEdit.firstName} ${patientToEdit.lastName}`);
    // Add your edit logic here (e.g., open a modal, navigate to an edit page, etc.)
    alert("Edit patient");
  };

  const handleDelete = () =>{
    alert("Delete patient")
  }

  return (
    <section className="page doctors">
      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1>PATIENTS</h1>
      <div className="banner">
        {patients && patients.length > 0 ? (
          patients.map((element, index) => {
            return (
              <div key={index} className="card">
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="patient avatar"
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
                    Diagnostic: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                  <p>
                    Address: <span>{element.address}</span>
                  </p>
                </div>
                <FaEdit onClick={handleEdit()}/>
                <MdDelete onClick={handleDelete()}/>

              </div>
            );
          })
        ) : (
          <h1>No Registered Patients Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Patients;
