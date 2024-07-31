// document.getElementById("count-el").innerText = 5
let count = 0
let countel = document.getElementById("count-el")
let saveel = document.getElementById("save-el")

function increment(){
    count += 1
    countel.innerText = count
}

function decrement(){
    count -= 1
    countel.textContent = count
}

function save() {
    countel.textContent = 0
    let countstr = count + " - " 
    saveel.textContent = saveel.textContent + countstr
    count = 0
}

function reset() {
    countel.textContent = 0
    saveel.textContent = "Previous Entries: "
    count = 0
}