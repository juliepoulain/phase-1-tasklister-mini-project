document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = e.target["new-task-description"].value;
    console.log(newTask);
    const li = document.createElement("li");
    document.querySelector("#tasks").append(li);
    li.textContent = `${newTask}`;
  });
});
