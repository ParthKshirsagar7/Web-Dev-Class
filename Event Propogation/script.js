const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const grandparent = document.querySelector(".grandparent");

const eventLog = document.querySelector(".event-logs");
const clearLogs = document.querySelector(".clear-logs");

clearLogs.addEventListener("click", () => {
    eventLog.innerHTML = "";
})

child.addEventListener("click", (e) => {
    const curr = document.createElement("li");
    curr.textContent = "Child -> Bubbling";
    eventLog.appendChild(curr);
})

parent.addEventListener("click", (e) => {
    const curr = document.createElement("li");
    curr.textContent = "Parent -> Bubbling";
    eventLog.appendChild(curr);
})

grandparent.addEventListener("click", (e) => {
    const curr = document.createElement("li");
    curr.textContent = "Grandparent -> Bubbling";
    eventLog.appendChild(curr);
})

child.addEventListener("click", (e) => {
    const curr = document.createElement("li");
    curr.textContent = "Child -> Capturing";
    eventLog.appendChild(curr);
}, true)

parent.addEventListener("click", (e) => {
    const curr = document.createElement("li");
    curr.textContent = "Parent -> Capturing";
    eventLog.appendChild(curr);
}, true)

grandparent.addEventListener("click", (e) => {
    const curr = document.createElement("li");
    curr.textContent = "Grandparent -> Capturing";
    eventLog.appendChild(curr);
}, true)