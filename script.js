const navContent = `
 <li><a href="#">Home</></li>
  <li><a href="#">Home</></li>
  <li><a href="#">Home</></li>
  <li><a href="#">Home</></li>
  <li><a href="#">Home</></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".siteheader").append(mainNav);
