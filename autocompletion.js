console.log("Hello")

let inputText = document.getElementById("inputText");
let box = document.getElementById("box");


let arr = ["Hello", "painting", "drawing", "Earth", "Magic"]



console.log(inputText)
inputText.addEventListener("input", function (e) {
    let value = inputText.value.toLowerCase();
    console.log(value)
    box.innerHTML = "";

    if (value === "") return;
    // console.log("Searched Value...")

    arr.forEach(keyword => {
        console.log(keyword)
        if (keyword.includes(value)) {
            let p = document.createElement('p')
            p.innerText = keyword

            box.appendChild(p);
            console.log(`searched: ${keyword}`)
        }
    });
})