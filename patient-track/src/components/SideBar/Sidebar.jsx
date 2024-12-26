// src/components/Sidebar.jsx
import React from 'react';
import { TiHome } from "react-icons/ti";
import { FaStethoscope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";


import "./Sidebar.css"

const Sidebar = ({ isSidebarOpen }) => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    navigateTo("/");
  };

  const gotoHomePage = () => {
    navigateTo("/");
  };

  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
  };
  const gotoPatientsPage = () => {
    navigateTo("/patients");
  };
  const gotoAlertesPage = () => {
    navigateTo("/alertes");
  };

  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/new");
};

  const gotoAddNewAdmin = () => {
    navigateTo("/admin/new");
  };
  const gotoAddNewPatient = () => {
    navigateTo("/patient/new");
  };

  return (
    isSidebarOpen && (
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-buttons">
          <TiHome onClick={gotoHomePage} />
          <AiFillMessage onClick={gotoAlertesPage} />
          <FaUser onClick={gotoPatientsPage} />
          <FaStethoscope onClick={gotoDoctorsPage} />
          <MdAddModerator onClick={gotoAddNewPatient} />
          <IoPersonAddSharp onClick={gotoAddNewDoctor} />
          <RiAdminFill onClick={gotoAddNewAdmin}/>
          <RiLogoutBoxFill onClick={handleLogout} />
        </div>
      </aside>
    )
  );
};

export default Sidebar;
