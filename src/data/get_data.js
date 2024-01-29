export async function getDataFromPlaceholder(parentItem) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const listElement = document.createElement("ul");

    data.forEach((user) => {
      const userElement = document.createElement("li");
      userElement.style.display = "flex";
      userElement.style.flexDirection = "column";
      userElement.style.gap = "15px";
      userElement.style.marginBottom = "20px";

      const userNameElement = document.createElement("h3");
      userNameElement.textContent = user.name;

      const userEmailElement = document.createElement("span");
      userEmailElement.textContent = user.email;

      const userPhoneElement = document.createElement("span");
      userPhoneElement.textContent = user.phone;

      userElement.append(userNameElement, userEmailElement, userPhoneElement);
      listElement.append(userElement);
    });

    parentItem.appendChild(listElement);
  } catch (error) {
    console.log("Произошла ошибка:", error);
  }
}

// getDataFromPlaceholder();
