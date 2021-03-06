import React from "react";
import { Route, Switch } from "react-router-dom";

import TopNav from "./components/sections/TopNav";
import TOC from "./components/sections/TOC";
import Cover from "./components/sections/Cover";
import WelcomeSection from "./components/sections/WelcomeSection";
import Priorities from "./components/sections/Priorities";
import Elections from "./components/sections/Elections";
import Venue from "./components/sections/Venue";
import RSVP from "./components/sections/RSVP";

const links = [
  { label: "Welcome", to: "/welcome" },
  { label: "Priorities Resolutions", to: "/priorities" },
  { label: "Steering Committee Elections", to: "/elections" },
  { label: "Venue, Accomodations, Accessibility", to: "/venu" },
  { label: "RSVP and Volunteer", to: "/rsvp" }
];

const Content = () => (
  <div>
    <TopNav title="EBDSA 2018 Convention" links={links} />
    <Cover title="East Bay DSA 2018 Chapter Convention" anchor="" />
    <TOC anchor="toc" links={links} />
    <WelcomeSection anchor="welcome" />
    <Priorities anchor="priorities" />
    <Elections anchor="elections" />
    <Venue anchor="venue" />
    <RSVP anchor="rsvp" />
  </div>
);

function App() {
  return (
    <Switch>
      <Route path="/:section/:candidate" component={Content} />
      <Route path="/:section" component={Content} />
      <Route path="/" component={Content} />
    </Switch>
  );
}

export default App;
