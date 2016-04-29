import MaterialColors from './material_colors'

export function getMaterialColor(type) {
  let color = '#000000'

  if (MaterialColors[type]) {
    let index = Math.floor((Math.random() * MaterialColors[type].length))
    color = MaterialColors[type][index].color
  }

  return color
}
