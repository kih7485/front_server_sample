import "./app.css";
import defaultImg from "./default-image.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
        <img src="${defaultImg}" />
    `;
});
