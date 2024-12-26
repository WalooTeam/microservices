import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
//import { Context } from "../main";
import Sidebar from "../components/SideBar/Sidebar";
import { useState } from "react";

const Alertes = () => {
  //const { isAuthenticated } = useContext(Context);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  

  // Messages statiques
  const messages = [
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      message: "Sensor XYZ indicated heart rate drop.",
      address : "Zootopia",
      doctor : "Jane Smith"
    },
    {
      _id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "0987654321",
      message: "Sensor ABC indicates heart rate spike.",
      address : "Madagascar",
      doctor : "John Doe"
    }
  ];

 /* if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
*/
const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <section className="page messages">
    {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1>ALERTES</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card" key={element._id}>
                <div className="details">
                  <p>
                    Name: <span>{element.firstName}</span><span> {element.lastName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p className="alert-message">
                    Alert: <span>{element.message}</span>
                  </p>
                  <p>
                    Address: <span>{element.address}</span>
                  </p>
                  <p>
                    Doctor: <span>{element.doctor}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  );
};

export default Alertes;






//dynamic

/*import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Alertes = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page messages">
      <h1>MESSAGE</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card" key={element._id}>
                <div className="details">
                  <p>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p>
                    Last Name: <span>{element.lastName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Message: <span>{element.message}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  );
};

export default Alertes;*/
