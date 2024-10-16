// Hamburger menu toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
}

// Navbar fixed on scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#to-top");

  if (header) {
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      if (toTop) {
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
      }
    } else {
      header.classList.remove("navbar-fixed");
      if (toTop) {
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
      }
    }
  }
};

// Close navbar when clicking outside the hamburger or nav menu
window.addEventListener("click", function (e) {
  const isClickInsideHamburger = hamburger.contains(e.target);
  const isClickInsideNavMenu = navMenu.contains(e.target);

  if (!isClickInsideHamburger && !isClickInsideNavMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark"); // Menambahkan class "dark" ke elemen <html>
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark"); // Menghapus class "dark"
    localStorage.setItem("theme", "light");
  }
});

// Saat halaman dimuat, periksa localStorage untuk mengatur tema
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
  html.classList.add("dark");
} else {
  darkToggle.checked = false;
  html.classList.remove("dark");
}
