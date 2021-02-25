const lnks = document.getElementsByClassName("navlink");
const bg = document.getElementById("navBg");

for (const lnk of lnks) {
  for (let i = 0; i < lnks.length; i++) {
    lnks[i].addEventListener("click", (ev) => {
      // clear the active flag from all of the links:
      for (l of lnks) {
        l.classList.remove("active");
      }

      //set the active flag on the current nav link.
      lnks[i].classList.add("active");

      // Set the left property of the navBg depending on which tab is active.
      bg.style.left = `calc(calc(100%/3) * ${i})`;
    });
  }
}
