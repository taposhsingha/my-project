import Article from "./components/article/Article";
import EditArticle from "./pages/editarticle/EditArticle";
import Home from "./pages/home/Home";
import JobsPage from "./pages/jobspage/JobsPage";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Singlejob from "./pages/singlejob/Singlejob";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/TopBar";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/jobspage" element={<JobsPage />} />
        <Route path="/write" element={<EditArticle />} />
        <Route path="/singlejob/:jobId" element={<Singlejob />} />
        <Route path="/post/:articleId" element={<Article />} />
        <Route
          path="/editarticle"
          element={user ? <EditArticle /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
