import { Routes, Route } from "react-router-dom";
import "swiper/css/bundle";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../../pages/Main/Main";
import StudentProfile from "../../pages/StudentProfile/StudentProfile";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/students/:id/:contentType" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
