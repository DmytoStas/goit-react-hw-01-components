function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function getRandomColor() {
  let color = '';
  while (true) {
    color = getRandomHexColor();
    if (color !== '#ffffff') {
      break;
    }
  }

  return color;
}
