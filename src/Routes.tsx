import React from "react";
import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";

import { Profile, Repo } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:repositoryName" element={<Repo />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
