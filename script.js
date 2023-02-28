function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pegar a img
  const img = document.querySelector("#profile img")

  // Subtituir a img
  if (html.classList.contains("light")) {
    // Se estiver light mode adcionar a img light mode
    img.setAttribute("src", "./assets/avatar-light.png ")
  } else {
    // Se não estiver light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png ")
  }
}
