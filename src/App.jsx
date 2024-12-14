import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import News from "./pages/news/News";
import NewsDetail from "./pages/newsDetail/NewsDetail";
import ScheduledCourses from "./pages/scheduledCourses/ScheduledCourses";
import CourseCatalog from "./pages/courseCatalog/CourseCatalog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/schedule" element={<ScheduledCourses />} />
          <Route path="/vendors" element={<CourseCatalog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
