var body = document.querySelector("body")
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    body.classList.add("preloader_ready")
    setTimeout(function () {
      body.classList.remove("preloader_active")
      body.classList.remove("preloader_ready")
    }, 500)
  }
}
