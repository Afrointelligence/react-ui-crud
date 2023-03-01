import React from "react";
import ReactUiCrud from "react-ui-crud";
import * as HeroiconsOutline from "@heroicons/react/outline";
import * as HeroiconsSolid from "@heroicons/react/solid";

const ReactLiveScope = {
  React,
  ...React,
  ...ReactUiCrud,
  ...HeroiconsOutline,
  ...HeroiconsSolid,
};
export default ReactLiveScope;
