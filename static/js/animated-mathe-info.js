window.addEventListener("load", () => {
  const foo = document.querySelector("#animated-mathe-info");
  if (!foo) {
    return;
  }

  let typed = "";
  let currentBlueprint = 0;
  let blueprints = ["Info", "Mathe"]
  let reversing = false;

  let max = 0;
  blueprints.forEach(it => {
    foo.textContent = it;
    max = Math.max(max, foo.getBoundingClientRect().width);
  });
  foo.style.width = max + "px";

  setInterval(() => {
    if (reversing) {
      if (typed.length === 0) {
        reversing = false;
      } else {
        typed = typed.substring(0, typed.length - 1);
      }
      foo.textContent = typed;
      return;
    }

    if (typed == blueprints[currentBlueprint]) {
      currentBlueprint = (currentBlueprint + 1) % blueprints.length;
      reversing = true;
      return;
    }
    typed = typed + blueprints[currentBlueprint].charAt(typed.length);
    foo.textContent = typed;
  }, 200)
})
