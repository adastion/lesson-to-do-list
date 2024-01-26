
export function Button(title, funct) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = title;

  buttonElement.addEventListener("click", () => {
    funct();
  });

  return buttonElement;
}
