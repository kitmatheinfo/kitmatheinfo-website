function removeNoscriptSettings() {
  const spacer = document.querySelector("#animated-mathe-info-spacer");
  spacer.textContent = "Mathe";
  spacer.style.opacity = 0;
  document.querySelector(".animated-mathe-info.current").style.width = spacer.getBoundingClientRect().width + "px";
  document.querySelector(".animated-mathe-info.old").style.width = spacer.getBoundingClientRect().width + "px";
}

window.addEventListener("load", () => {
  let currentBlueprint = 0;
  let blueprints = ["Info", "Mathe"]
  let directionMultiplier = 1;

  removeNoscriptSettings();

  const iteration = () => {
    const currentFoo = document.querySelector(".animated-mathe-info.current");
    const oldFoo = document.querySelector(".animated-mathe-info.old");
    const container = document.querySelector(".animated-mathe-info-container");
    container.style.height = container.parentElement.getBoundingClientRect().height + "px";

    currentBlueprint = (currentBlueprint + 1) % blueprints.length;

    currentFoo.textContent = blueprints[currentBlueprint];
    currentFoo.classList.add("no-animate");
    currentFoo.style.transform = `translateY(${-directionMultiplier}em)`;
    currentFoo.classList.add("old");
    currentFoo.classList.remove("current");

    setTimeout(() => {
      currentFoo.classList.remove("no-animate");
      currentFoo.style.transform = "translateY(0)";
      currentFoo.style.opacity = 1;
    }, 20);

    // Outro it!
    oldFoo.style.transform = `translateY(${directionMultiplier}em)`;
    oldFoo.style.opacity = 0;
    oldFoo.classList.remove("old");
    oldFoo.classList.add("current");

    directionMultiplier *= -1;
  }

  iteration();

  setInterval(iteration, 3000)
})
