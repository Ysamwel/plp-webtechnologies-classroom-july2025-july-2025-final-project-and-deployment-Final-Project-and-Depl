document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskDate = document.getElementById("taskDate");
  const taskTime = document.getElementById("taskTime");
  const taskInput = document.getElementById("taskInput");
  const taskContainer = document.getElementById("taskContainer");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = taskDate.value;
    const time = taskTime.value;
    const task = taskInput.value;

    if (!date || !time || !task) return;

    // Check if date section already exists
    let dateSection = document.querySelector(`#day-${date}`);
    if (!dateSection) {
      dateSection = document.createElement("div");
      dateSection.id = `day-${date}`;
      dateSection.classList.add("day-block");

      const heading = document.createElement("h3");
      heading.textContent = new Date(date).toDateString();
      dateSection.appendChild(heading);

      const ul = document.createElement("ul");
      ul.classList.add("task-list");
      dateSection.appendChild(ul);

      taskContainer.appendChild(dateSection);
    }

    // Add task to the correct day's list
    const ul = dateSection.querySelector(".task-list");
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${time}</strong> - ${task}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Animate task addition
    li.style.opacity = 0;
    li.style.transform = "translateY(10px)";
    setTimeout(() => {
      li.style.transition = "all 0.3s ease";
      li.style.opacity = 1;
      li.style.transform = "translateY(0)";
    }, 10);

    // Delete task event
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });

    ul.appendChild(li);

    // Reset form
    taskInput.value = "";
    taskTime.value = "";
  });
});
