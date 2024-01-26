export function Header(dataTitle) {
  const containerElement = document.createElement("header");
  const titleElement = document.createElement("h1");
  titleElement.textContent = dataTitle;

  containerElement.append(titleElement);
  return containerElement;
}
