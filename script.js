const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add Task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for '×'
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Toggle 'checked' class and delete task
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save to LocalStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display saved data on load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
