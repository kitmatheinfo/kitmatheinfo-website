function removeNoscriptSettings() {
  document.querySelector("#animated-mathe-info-spacer").textContent = "Mathe";
  document.querySelector("#animated-mathe-info-spacer").style.opacity = 0;
}

window.addEventListener("load", () => {
  let currentBlueprint = 0;
  let blueprints = ["Info", "Mathe"]

  removeNoscriptSettings();

  const iteration = () => {
    const currentFoo = document.querySelector(".animated-mathe-info.current");
    const oldFoo = document.querySelector(".animated-mathe-info.old");
    const container = document.querySelector(".animated-mathe-info-container");
    container.style.height = container.parentElement.getBoundingClientRect().height + "px";

    currentBlueprint = (currentBlueprint + 1) % blueprints.length;

    currentFoo.textContent = blueprints[currentBlueprint];
    currentFoo.style.transform = "translateY(1em)";
    currentFoo.style.opacity = 1;
    currentFoo.classList.add("old");
    currentFoo.classList.remove("current");

    setTimeout(() => {
      currentFoo.style.transform = "translateY(0)";
    }, 1);

    // Outro it!
    oldFoo.style.transform = "translateY(-1em)";
    oldFoo.style.opacity = 0;
    oldFoo.classList.remove("old");
    oldFoo.classList.add("current");
  }

  iteration();

  setInterval(iteration, 3000)
})
