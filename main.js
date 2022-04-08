let menubtn = document.querySelector(".menu-btn");
let sidebar = document.querySelector(".sidebar");

menubtn.onclick = function () {
  sidebar.classList.toggle("resize-sidebar");
};
