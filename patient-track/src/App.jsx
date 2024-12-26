import { BrowserRouter, Routes, Route} from "react-router-dom";
// App.js
//import Home from "./Pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Doctors from "./pages/Doctors.jsx";
import Patients from "./pages/Patients.jsx";
import AddNewDoctor from "./pages/AddNewDoctor.jsx";
import AddNewAdmin from "./pages/AddNewAdmin.jsx"
import AddNewPatient from "./pages/AddNewPatient.jsx"
import Alertes from "./pages/Alertes.jsx";
import "./App.css"
/*import SignUp from "./Pages/SignUp/SignUp";
import LensDB from "./Pages/LensDB/LensDB";
import AnalyticsDB from "./Pages/AnalyticsDB/Analytics";
import PatientDB from "./Pages/PatientDB/PatientDB";
import SurgeryDB from "./Pages/SurgeryDB/SurgeryDB";*/
/*

        <Route path="/:doctorId/home" element={<Home/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/analyticsDB" element={<AnalyticsDB/>}/>
        <Route path="/:doctorId/patientDB" element={<PatientDB/>}/>
        <Route path="/:doctorId/surgeryDB" element={<SurgeryDB/>}/>
        <Route path="/:doctorId/lensDB" element={<LensDB/>}/>
*/ 
function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route index element={<Login/>}/> 
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctor/new" element={<AddNewDoctor />} />
        <Route path="/admin/new" element={<AddNewAdmin />} />
        <Route path="/patient/new" element={<AddNewPatient />} />
        <Route path="/alertes" element={<Alertes />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;

