
export async function getDataTodos(render) {
  let returnData;
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();
    returnData = await data;
    console.log(returnData)
    render(returnData);
  } catch (error) {
    console.log("ERROR MESSAGE", error);
  }
}
