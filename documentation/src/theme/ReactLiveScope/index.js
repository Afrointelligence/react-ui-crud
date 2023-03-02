import React from "react";
import ReactUiCrud from "react-ui-crud";
import * as HeroiconsOutline from "@heroicons/react/outline";
import * as HeroiconsSolid from "@heroicons/react/solid";
import DisplayForm from "@site/lib/Display/displayForm";

const ReactLiveScope = {
    React,
    DisplayForm,
    ...React,
    ...ReactUiCrud,
    ...HeroiconsOutline,
    ...HeroiconsSolid,

};
export default ReactLiveScope;
