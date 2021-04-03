// var body = document.querySelector("body")
// document.onreadystatechange = function () {
//   if (document.readyState === "complete") {
//     body.classList.add("preloader_ready")
//     setTimeout(function () {
//       body.classList.remove("preloader_active")
//       body.classList.remove("preloader_ready")
//     }, 10000)
//   }
// }

// /starts a new line |delays
var string =
  ">BOOT SEQUENCE INITIALISING.|..|...|....|...../>STARTUP OK./>WELCOME, HOME USER./>TIME TO WRITE SOME CODEE!|"

var fString = ""
var progress = 0
var progresss = 0
var badString = ""
var blinker = false

var goMad = function () {
  var i = setInterval(function () {
    blink()
  }, 500)
  setTimeout(function () {
    clearInterval(i)
  }, 5000)

  setTimeout(function () {
    document.getElementById("terminal").style.backgroundColor = "black"
    document.getElementById("terminal").textContent = ""
    document.getElementById("terminal").style.padding = "0"
    document.getElementById("terminal").style.animation = "off 1s forwards"
  }, 2000)
}

blink = function () {
  blinker
    ? (document.getElementById("terminal").textContent = fString)
    : (document.getElementById("terminal").textContent = fString + "_")
  blinker = !blinker
}

var pause = function () {
  var setBlink = setInterval(function () {
    blink()
  }, 500)
  setTimeout(function () {
    type()
    clearInterval(setBlink)
  }, 1000)
}

var type = function () {
  if (progress < string.length) {
    var next = string.substring(progress, progress + 1)
    switch (next) {
      case "|":
        pause()
        break
      case "/":
        fString += "\r\n"
        setTimeout(function () {
          type()
        }, 100)
        break
      default:
        fString += next

        document.getElementById("terminal").textContent = fString + "_"
        setTimeout(function () {
          type()
        }, 50 + Math.random() * 100)
        break
    }
    progress++
  } else {
    goMad()
  }
}

type()
