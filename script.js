let counter = document.getElementById('counter')
let saveItem = document.getElementById('save-entries')
let sumTotal = document.getElementById('sum-total')
let count = 0

function increment(){
    count++
    counter.innerText = count
}
function save(){
    let entries = count + " - "
    saveItem.textContent += entries
    counter.innerText = 0
    count = 0
}
 function reset(){
     
    counter.innerText = 0
    count = 0
    saveItem.textContent = " Previous Enteries: " 
    entries= 0
   
}
