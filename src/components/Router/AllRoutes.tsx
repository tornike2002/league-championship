import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import RegistrationPage from "../login&registration/registration/RegistrationPage";
import Schedules from "../schedules/Schedules";
import Standings from "../standing/Standings";
import LoginPage from "../login&registration/login/LoginPage";
import Playofss from "../playoff/Playofss";
import TeamRegister from "../login&registration/TeamRegister/TeamRegister";
import PreTournament from "../pre-tournament/PreTournamentPage";
import Profile from "../ProfilePage/Profile";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/registration"
          element={
            <>
              <RegistrationPage />
            </>
          }
        />
        <Route path="/teamRegister" element={<TeamRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/standings/regular-season" element={<Standings />} />
        <Route path="/standings/playoffs" element={<Playofss />} />
        <Route
          path="/standings/pre-tournament-brackets"
          element={<PreTournament />}
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
