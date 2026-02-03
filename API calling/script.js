const button = document.getElementById("get-data")
const responseDOM = document.getElementById("response");

button.addEventListener("click", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    for(let key in data){
        let curr = document.createElement('li')
        curr.textContent = key + ": " + data[key]
        responseDOM.appendChild(curr)
    }
})