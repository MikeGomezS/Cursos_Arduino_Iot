import cardIngreso from "./cardIngr.js";
import valClaveAr from "./valClaveA.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
     cardIngreso(".panel-btn", ".popup", ".close-btn");
     valClaveAr("form","clave");
});
