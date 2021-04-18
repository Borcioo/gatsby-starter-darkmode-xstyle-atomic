export let rectangle = {
  height: 32,
  jumping: true,
  width: 32,
  x: 10, // center of the canvas
  x_velocity: 0,
  y: 400,
  y_velocity: 0,
}

export const controller = {
  left: false,
  right: false,
  up: false,
  keyListener: function (event) {
    var key_state = event.type == "keydown" ? true : false

    switch (event.keyCode) {
      case 37: // left key
        controller.left = key_state
        console.log("lewo")
        break
      case 38: // up key
        controller.up = key_state
        console.log("górna")
        break
      case 39: // right key
        controller.right = key_state
        console.log("prawo")
        break
    }
  },
}
