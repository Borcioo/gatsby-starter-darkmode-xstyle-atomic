let demensions = {
  height: 10,
  width: 100,
  x: 40,
  y: 400,
}

const platform = (context, height, width, x, y) => {
  context.fillStyle = "rgba(255, 255, 255, 0)"
  context.fillRect(0, 0, 1152, 496)
  context.fillStyle = "#ff0000"
  context.beginPath()
  context.rect(x, y, width, height)
  context.fill()
}

export default platform
