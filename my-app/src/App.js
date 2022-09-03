import Navbars from "./components/Navbars";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Hakkimda from "./components/Hakkimda";
import { Routes, Route } from "react-router-dom";
import Kisiselblog from "./components/Kisiselblog";
import Yazilimblog from "./components/Yazilimblog";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/anasayfa" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/blog/kisiselblog" element={<Kisiselblog/>}/>
        <Route path="/blog/dokuman" element={<Yazilimblog/>}/>
      </Routes>
    </div>
  );
}

export default App;
