import { rectangle } from "@Gatoms/defaults"

const colision = (controller, matrix) => {
  if (controller.up && rectangle.jumping == false) {
    rectangle.y_velocity -= 20
    rectangle.jumping = true
  }

  if (controller.left) {
    rectangle.x_velocity -= 0.5
  }

  if (controller.right) {
    rectangle.x_velocity += 0.5
  }

  rectangle.y_velocity += 1.5 // grawitacja
  rectangle.x += rectangle.x_velocity
  rectangle.y += rectangle.y_velocity
  rectangle.x_velocity *= 0.9 // tarcie
  rectangle.y_velocity *= 0.9 // tarcie

  // Kolizja podłogi
  if (rectangle.y > 496 - 16 - 32) {
    rectangle.jumping = false
    rectangle.y = 496 - 16 - 32
    rectangle.y_velocity = 0
  }

  // Lewe ograniczenie
  if (rectangle.x < 0) {
    rectangle.x = 0
  } else if (rectangle.x + 32 > 1152) {
    //  Prawe ograniczenie

    rectangle.x = 1152 - 32
  }

  // Kolizja platformy
  for (var a = 0; a < matrix.length; a++) {
    if (
      // Lewa kolizja
      rectangle.x + 32 >= matrix[a].x - 3 &&
      rectangle.x + 32 <= matrix[a].x + 3
    ) {
      if (rectangle.y > matrix[a].y - 32 && rectangle.y < matrix[a].y + 10) {
        rectangle.x = matrix[a].x - 32 - 3
      }
    } else if (
      // prawa kolizja
      rectangle.x >= matrix[a].x + matrix[a].w - 3 &&
      rectangle.x <= matrix[a].x + matrix[a].w + 3
    ) {
      if (rectangle.y > matrix[a].y - 32 && rectangle.y < matrix[a].y + 10) {
        rectangle.x = matrix[a].x + matrix[a].w + 3
      }
    } else if (
      rectangle.x + 32 > matrix[a].x + 2 &&
      rectangle.x <= matrix[a].x + matrix[a].w
    ) {
      if (
        //dolna kolizja
        rectangle.y > matrix[a].y - 1 - 32 &&
        rectangle.y < matrix[a].y + 10 - 32
      ) {
        rectangle.jumping = false
        rectangle.y = matrix[a].y - 1 - 32
        rectangle.y_velocity = 0
      } else if (
        //górna kolizja
        rectangle.y <= matrix[a].y + 10 &&
        rectangle.y > matrix[a].y
      ) {
        rectangle.y = matrix[a].y + 10
      }
    }
  }
}

export default colision
