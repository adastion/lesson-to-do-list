export async function getDataFromPlaceholder(parentItem) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const listElement = document.createElement("ul");

    data.forEach((user) => {
      const userElement = document.createElement("li");
      userElement.textContent = user.title;

      const coverElement = document.createElement("img");
      coverElement.alt = "cover";
      coverElement.src = user.url;

      userElement.append(coverElement);
      listElement.append(userElement);
    });

    parentItem.appendChild(listElement);
  } catch (error) {
    console.log("Произошла ошибка:", error);
  }
}

// getDataFromPlaceholder();
