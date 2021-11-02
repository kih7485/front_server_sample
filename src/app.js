import "./app.css";
import defaultImg from "./default-image.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
        <img src="${defaultImg}" />
    `;
});

console.log(process.env.NODE_ENV);
console.log(TWO);
console.log(api.domain);
