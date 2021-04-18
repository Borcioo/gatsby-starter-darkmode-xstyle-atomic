import { rectangle } from "@Gatoms/defaults"

const player = (context) => {
  context.fillStyle = "rgba(255, 255, 255, 0)"
  context.fillRect(0, 0, 1152, 496)
  context.fillStyle = "#ff0000"
  context.beginPath()
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
  context.fill()
  //   context.strokeStyle = "#202830"
  //   context.lineWidth = 4
  //context.beginPath()
}

export default player
