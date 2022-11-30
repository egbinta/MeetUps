import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllmeetUps from "./Pages/AllmeetUps";
import Favorites from "./Pages/Favorites";
import NewMeetUp from "./Pages/NewMeetUp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllmeetUps />} />
          <Route path="/new-meetups" element={<NewMeetUp />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
