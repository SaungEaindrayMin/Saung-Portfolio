import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./layout/Main/components/Main";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Work from "./views/Work/Work";
import Contact from "./views/Contact/Contact";
import ProjectDetail from "./views/Work/ProjectDetail";


const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:projectId" element={<ProjectDetail />} />  {/* Project detail route */}
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteComponent;
