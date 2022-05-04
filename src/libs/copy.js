export default function copy(text) {
  const inputElement = document.createElement('input');
  inputElement.value = text;
  document.body.appendChild(inputElement);
  inputElement.select();

  document.execCommand('copy');
  document.body.removeChild(inputElement);
}
