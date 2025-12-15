const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup" , ()=>{
    upadateCounter()
});
upadateCounter();
function upadateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText =textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
