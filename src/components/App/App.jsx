import { Routes, Route } from "react-router-dom";
import "swiper/css/bundle";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../../pages/Main/Main";
import StudentProfile from "../../pages/StudentProfile/StudentProfile";
import StudentContent from "../../pages/StudentContent/StudentContent";
import ForkTutorial from "../../pages/Fork/Fork";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/students/:id/:contentType" element={<StudentContent />} />
        <Route path="/fork-tutorial" element={<ForkTutorial />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
