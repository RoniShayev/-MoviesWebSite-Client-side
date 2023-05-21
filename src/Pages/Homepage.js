import React from "react";
import Logincomp from "./Login";
import Maincomp from "./Main";
import Moviescomp from "./Movies";
import Subcriptioncomp from "./Subcription";
import Userscomp from "./Users";
import { Route, Routes } from "react-router-dom";
import Addmoviecomp from "./Addmovie";
import Addmembercomp from "./Addmember";
import Moviecomp from "./Movie";
import EditmovieComp from "./Editmovie";
import EditmemberComp from "./Editmember";
import '../App.css'

const Homepagecomp = () => {
  return (
    <div className="App" >
      <h1 style={{ color: "gold" }}>Movies - Subscriptions Web Site </h1>

      <Routes>
        <Route path="" element={<Logincomp />} />
        <Route path="Main" element={<Maincomp />}>
          <Route path="Movies" element={<Moviescomp />}>
            <Route path="Addmovie" element={<Addmoviecomp />}></Route>
            <Route path="Movie" element={<Moviecomp />} />
          </Route>

          <Route path="Subcription" element={<Subcriptioncomp />}>
            <Route path="Addmember" element={<Addmembercomp />} />
          </Route>
          <Route path="Users" element={<Userscomp />} />

          <Route path="Movie/:_id" element={<EditmovieComp />} />
          <Route path="Subcription/:_id" element={<EditmemberComp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Homepagecomp;
