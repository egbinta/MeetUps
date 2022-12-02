import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllmeetUps from "./Pages/AllmeetUps";
import Favorites from "./Pages/Favorites";
import NewMeetUp from "./Pages/NewMeetUp";
import Layout from "./componenets/Layout/Layout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllmeetUps />} />
            <Route path="/new-meetup" element={<NewMeetUp />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
