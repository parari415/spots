// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import SpotPage from "./components/SpotPage";
import PostPage from "./components/PostPage";
import ContactPage from "./components/ContactPage";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/spot">スポット詳細</Link>
            </li>
            <li>
              <Link to="/post">投稿</Link>
            </li>
            <li>
              <Link to="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spot" element={<SpotPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
