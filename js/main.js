"use strict";

import { createWork } from "./function/createWork.js";

const form = document.querySelector("#newItem");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createWork(event.target.elements["time"].value, event.target.elements["work"].value);
  
});
