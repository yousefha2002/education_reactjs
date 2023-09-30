import "./App.css";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tutors from "./pages/Tutors";
import SingleTutor from "./pages/SingleTutor";
import SelectSubject from "./pages/teacher/steppers/SelectSubject";
import ProfilePicture from "./pages/teacher/steppers/ProfilePicture";
import AddAvailable from "./pages/teacher/steppers/AddAvailable";
import Description from "./pages/teacher/steppers/Description";
import StudentDashboard from "./pages/student/StudentDashboard";
import ControlBoard from "./pages/admin/ControlBoard";
import AdminLevels from "./pages/admin/AdminLevels";

const queryClient = new QueryClient()

function App() {
  const location = useLocation();
  const isNotAdminPage = !location.pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
        {isNotAdminPage && <Navbar/>}
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="select-tutor/subject/:id" element={<Tutors/>}/>
          <Route path="tutor/:id" element={<SingleTutor/>}/>

          {/** teacher pages */}
          <Route path="teacher/signup/step1" element={<SelectSubject/>}/>
          <Route path="teacher/signup/step2" element={<ProfilePicture/>}/>
          <Route path="teacher/signup/step3" element={<Description/>}/>
          <Route path="teacher/signup/step4" element={<AddAvailable/>}/>

        {/** student pages */}
        <Route path="student/dashboard" element={<StudentDashboard/>}/>

        {/* admin pages */}
        <Route path="/admin" element={<ControlBoard/>}/>
        <Route path="/admin/levels" element={<AdminLevels/>}/>
        </Routes>
        {isNotAdminPage && <Footer/>}
    </QueryClientProvider>
  );
}

export default App;