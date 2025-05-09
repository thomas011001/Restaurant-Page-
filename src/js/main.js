import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import homePage from "./components/home";
import menuPage from "./components/menu";
import aboutPage from "./components/about";

const content = (() => {
  const contentDiv = document.getElementById("content");
  const clear = () => (contentDiv.innerHTML = "");
  const set = (section) => {
    clear();
    contentDiv.appendChild(section);
  };
  return { clear, set };
})();

content.set(homePage());

document
  .getElementById("home-btn")
  .addEventListener("click", () => content.set(homePage()));
document
  .getElementById("menu-btn")
  .addEventListener("click", () => content.set(menuPage()));
document
  .getElementById("about-btn")
  .addEventListener("click", () => content.set(aboutPage()));
