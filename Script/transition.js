window.addEventListener("load", () => {
    const transition = document.getElementById("page-transition");
    if (!transition) return;
  
    setTimeout(() => transition.classList.add("hidden"), 300);
  });