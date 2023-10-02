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
import StudentImage from "./pages/student/StudentImage";
import ControlBoard from "./pages/admin/ControlBoard";
import AdminLevels from "./pages/admin/AdminLevels";
import StudentProfile from "./pages/student/StudentProfile";
import AdminSubjects from "./pages/admin/AdminSubjects";
import TeachersToApprove from "./pages/admin/TeachersToApprove";
import TeachersViewAdmin from "./pages/admin/TeachersViewAdmin";
import AdminViewStudents from "./pages/admin/AdminViewStudents";
import StudentClasses from "./pages/student/StudentClasses";
import StudentFinancial from "./pages/student/StudentFinancial";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import Settings from "./pages/teacherStudent/Settings";
import TeacherClasses from "./pages/teacher/TeacherClasses";
import TeacherFinancial from "./pages/teacher/TeacherFinancial";
import StudentSignup from "./pages/student/StudentSignup";
import TeacherSignup from "./pages/teacher/TeacherSignup";

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

          {/** student & teacher pages */}
          <Route path="settings" element={<Settings/>}/>

          {/** teacher pages */}
          <Route path="teacher/signup/step1" element={<SelectSubject/>}/>
          <Route path="teacher/signup/step2" element={<ProfilePicture/>}/>
          <Route path="teacher/signup/step3" element={<Description/>}/>
          <Route path="teacher/signup/step4" element={<AddAvailable/>}/>
          <Route path="teacher/dashboard" element={<TeacherDashboard/>}/>
          <Route path="teacher/myClasses" element={<TeacherClasses/>}/>
          <Route path="teacher/financial" element={<TeacherFinancial/>}/>
          <Route path="teacher/signup" element={<TeacherSignup/>}/>


          {/** student pages */}
          <Route path="student/dashboard" element={<StudentDashboard/>}/>
          <Route path="student/photo" element={<StudentImage/>}/>
          <Route path="student/profile" element={<StudentProfile/>}/>
          <Route path="student/myClasses" element={<StudentClasses/>}/>
          <Route path="student/financial" element={<StudentFinancial/>}/>
          <Route path="student/signup" element={<StudentSignup/>}/>

          {/* admin pages */}
          <Route path="/admin" element={<ControlBoard/>}/>
          <Route path="/admin/levels" element={<AdminLevels/>}/>
          {/* admin pages */}
          <Route path="/admin" element={<ControlBoard/>}/>
          <Route path="/admin/levels" element={<AdminLevels/>}/>
          <Route path="/admin/subjects" element={<AdminSubjects/>}/>
          <Route path="/admin/teachers" element={<TeachersViewAdmin/>}/>
          <Route path="/admin/teachers/approve" element={<TeachersToApprove/>}/>
          <Route path="/admin/students" element={<AdminViewStudents/>}/>
          </Routes>
        {isNotAdminPage && <Footer/>}
        
    </QueryClientProvider>
  );
}

export default App;