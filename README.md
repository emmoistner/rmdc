# rmdc

Simple javascript utility that returns random color from the [material design palette](https://www.google.com/design/spec/style/color.html#color-color-palette)

## Usage

### Install
```
npm install --save rmdc
```

### ES6

```js
import { getMaterialColor } from 'rmdc'

getMaterialColor('500') // '#F44336'
getMaterialColor('A400') // '#00b0ff'
getMaterialColor('extras') // '#000000'
```

### ES5

```js
var getMaterialColor = require('rmdc').getMaterialColor

getMaterialColor('500') // '#9C27B0'
getMaterialColor('A400') // '#ff9100'
getMaterialColor('extras') // '#ffffff'
```

## Colors

```json
{
  "50": [ "#fde0dc", "#fce4ec", "#f3e5f5", "#ede7f6", "#e8eaf6", "#e7e9fd", "#e1f5fe", "#e0f7fa", "#e0f2f1", "#d0f8ce", "#f1f8e9", "#f9fbe7", "#fffde7", "#fff8e1", "#fff3e0", "#fbe9e7", "#efebe9", "#fafafa", "#eceff1" ],
  "100": [ "#f9bdbb", "#f8bbd0", "#e1bee7", "#d1c4e9", "#c5cae9", "#d0d9ff", "#b3e5fc", "#b2ebf2", "#b2dfdb", "#a3e9a4", "#dcedc8", "#f0f4c3", "#fff9c4", "#ffecb3", "#ffe0b2", "#ffccbc", "#d7ccc8", "#f5f5f5", "#cfd8dc" ],
  "200": [ "#f69988", "#f48fb1", "#ce93d8", "#b39ddb", "#9fa8da", "#afbfff", "#81d4fa", "#80deea", "#80cbc4", "#72d572", "#c5e1a5", "#e6ee9c", "#fff59d", "#ffcc80", "#ffab91", "#bcaaa4", "#eeeeee", "#b0bec5" ],
  "300": [ "#f36c60", "#f06292", "#ba68c8", "#9575cd", "#7986cb", "#91a7ff", "#4fc3f7", "#4dd0e1", "#4db6ac", "#42bd41", "#aed581", "#dce775", "#fff176", "#ffb74d", "#ff8a65", "#a1887f", "#e0e0e0", "#90a4ae" ],
  "400": [ "#e84e40", "#ec407a", "#ab47bc", "#7e57c2", "#5c6bc0", "#738ffe", "#29b6f6", "#26c6da", "#26a69a", "#2baf2b", "#9ccc65", "#d4e157", "#ffee58", "#ffa726", "#ff7043", "#8d6e63", "#bdbdbd", "#78909c" ],
  "500": [ "#e51c23", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#5677fc", "#03a9f4", "#00bcd4", "#009688", "#259b24", "#8bc34a", "#cddc39", "#ffeb3b", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b" ],
  "600": [ "#dd191d", "#d81b60", "#8e24aa", "#5e35b1", "#3949ab", "#4e6cef", "#039be5", "#00acc1", "#00897b", "#0a8f08", "#7cb342", "#c0ca33", "#fdd835", "#fb8c00", "#f4511e", "#6d4c41", "#757575", "#546e7a" ],
  "700": [ "#d01716", "#c2185b", "#7b1fa2", "#512da8", "#303f9f", "#455ede", "#0288d1", "#0097a7", "#00796b", "#0a7e07", "#689f38", "#afb42b", "#fbc02d", "#f57c00", "#e64a19", "#5d4037", "#616161", "#455a64" ],
  "800": [ "#c41411", "#ad1457", "#6a1b9a", "#4527a0", "#283593", "#3b50ce", "#0277bd", "#00838f", "#00695c", "#056f00", "#558b2f", "#9e9d24", "#f9a825", "#ef6c00", "#d84315", "#4e342e", "#424242", "#37474f" ],
  "900": [ "#b0120a", "#880e4f", "#4a148c", "#311b92", "#1a237e", "#2a36b1", "#01579b", "#006064", "#004d40", "#0d5302", "#33691e", "#827717", "#f57f17", "#e65100", "#bf360c", "#3e2723", "#212121", "#263238" ],
  "A100": [ "#ff7997", "#ff80ab", "#ea80fc", "#b388ff", "#8c9eff", "#a6baff", "#80d8ff", "#84ffff", "#a7ffeb", "#a2f78d", "#ccff90", "#f4ff81", "#ffff8d", "#ffd180", "#ff9e80" ],
  "A200": [ "#ff5177", "#ff4081", "#e040fb", "#7c4dff", "#536dfe", "#6889ff", "#40c4ff", "#18ffff", "#64ffda", "#5af158", "#b2ff59", "#eeff41", "#ffff00", "#ffab40", "#ff6e40" ],
  "A400": [ "#ff2d6f", "#f50057", "#d500f9", "#651fff", "#3d5afe", "#4d73ff", "#00b0ff", "#00e5ff", "#1de9b6", "#14e715", "#76ff03", "#c6ff00", "#ffea00", "#ff9100", "#ff3d00" ],
  "A700": [ "#e00032", "#c51162", "#aa00ff", "#6200ea", "#304ffe", "#4d69ff", "#0091ea", "#00b8d4", "#00bfa5", "#12c700", "#64dd17", "#aeea00", "#ffd600", "#ff6d00", "#dd2c00" ],
  "extras": [ "#000000", "#ffffff" ]
}
```
