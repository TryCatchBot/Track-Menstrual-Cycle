import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import CycleOverview from "./components/CycleOverview";
import MenstruationWindow from "./components/MenstruationWindow";
import OvulationWindow from "./components/OvulationWindow";
import EditPeriod from "./components/EditPeriod";

const App = () => {
  const [userData, setUserData] = useState({ userName: "", userDob: "" });

  const handleUserData = (name, dob) => {
    setUserData({ userName: name, userDob: dob });
  };

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<IndexPage onTrackPeriodClick={handleUserData} />}
          />
          <Route
            path="/cycle-overview"
            element={<CycleOverview userData={userData} />}
          />
          <Route
            path="/menstruation-window"
            element={<MenstruationWindow userData={userData} />}
          />
          <Route
            path="/ovulation-window"
            element={<OvulationWindow userData={userData} />}
          />
          <Route path="/edit-period" element={<EditPeriod />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
