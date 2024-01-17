import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import CycleOverviewPage from "./components/pages/CycleOverviewPage";
import MenstruationWindowPage from "./components/pages/MenstruationWindowPage";
import OvulationWindowPage from "./components/pages/OvulationWindowPage";
import EditPeriodPage from "./components/pages/EditPeriodPage";
import WhenStrualDryPage from "./components/pages/WhenStrualDryPage";

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
            element={<CycleOverviewPage userData={userData} />}
          />
          <Route
            path="/menstruation-window"
            element={<MenstruationWindowPage userData={userData} />}
          />
          <Route
            path="/ovulation-window"
            element={<OvulationWindowPage userData={userData} />}
          />
          <Route path="/edit-period" element={<EditPeriodPage />} />
          <Route path="/whenStrual-dry" element={<WhenStrualDryPage/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
