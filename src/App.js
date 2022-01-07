import Article from "./pages/article/Article";
import EditArticle from "./pages/editarticle/EditArticle";
import Home from "./pages/home/Home";
import JobsPage from "./pages/jobspage/JobsPage";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Singlejob from "./pages/singlejob/Singlejob";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/TopBar";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/jobspage" element={<JobsPage />} />
        <Route path="/singlejob/:jobId" element={<Singlejob />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route
          path="/editarticle/:articleId"
          element={user ? <EditArticle /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
