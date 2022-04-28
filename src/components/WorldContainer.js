import React from "react";
import HomeWorld from "./HomeWorld";
import DragonWorld from "./DragonWorld";
import CrystalWorld from "./CrystalWorld";
import { Switch, Route } from "wouter";
import { a } from "@react-spring/three";

export default function WorldContainer({ transition }) {
  /*-- Add transition to each location --*/
  return transition(({ ...props }, location) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <HomeWorld />
        </Route>
        <Route path="/dragon-world">
          <DragonWorld />
        </Route>
        <Route path="/ballpit-treasure">
          <CrystalWorld />
        </Route>
      </Switch>
    </a.group>
  ));
}
