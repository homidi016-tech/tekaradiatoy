
function openMenu(target) {
  const menu = document.getElementById("sideMenu");
  const menuTitle = document.getElementById("menuTitle");
  const searchBox = document.getElementById("searchBox");
  menu.classList.add("open");
  if (target === "search") {
    menuTitle.textContent = "جستجوی محصولات";
    searchBox.scrollIntoView({ behavior: "smooth" });
  } else {
    menuTitle.textContent = "منو";
  }
}

function closeMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.remove("open");
}
