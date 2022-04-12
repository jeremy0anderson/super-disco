document.querySelector("#\\38 > textarea").value = localStorage.getItem("8");
document.querySelector("#\\39 > textarea").value = localStorage.getItem("9");
document.querySelector("#\\31 0 > textarea").value = localStorage.getItem("10");
document.querySelector("#\\31 1 textarea").value = localStorage.getItem("11");
document.querySelector("#\\31 2 > textarea").value = localStorage.getItem("12");
document.querySelector("#\\31 3 > textarea").value =localStorage.getItem("13");
document.querySelector("#\\31 4 > textarea").value =localStorage.getItem("14");
document.querySelector("#\\31 5 > textarea").value =localStorage.getItem("15");
document.querySelector("#\\31 6 > textarea").value =localStorage.getItem("16");
document.querySelector("#\\31 7 > textarea").value =localStorage.getItem("17");
document.querySelectorAll('.hourNumber').forEach(hour =>{
      hour.textContent=hour.parentElement.parentElement.id+"a"
      if (Number(hour.parentElement.parentElement.id)>12 && Number(hour.parentElement.parentElement.id)<24){
            hour.textContent = String(Number(hour.parentElement.parentElement.id)-12)+"p"
      }
});
let blocks = document.querySelectorAll('.row');
document.querySelectorAll(".save-btn").forEach(sb => {
      sb.addEventListener("click", function () {
            let taskBlockText = sb.previousElementSibling.value;
            let taskBlockTime = sb.parentElement.getAttribute("id");
            localStorage.setItem(taskBlockTime, taskBlockText);
      });
});
setInterval(()=>{
      let currentTime = new Date().getHours();
for (let i = 0; i < blocks.length; i++) {
      if (Number(blocks[i].id) === currentTime){
            blocks[i].classList.add('present');
            blocks[i].classList.remove('past', 'future');
      }
      if (Number(blocks[i].id) > currentTime){
            blocks[i].classList.add('future');
            blocks[i].classList.remove('past', 'present');
      }
      if (Number(blocks[i].id) < currentTime){
            blocks[i].classList.add('past');
            blocks[i].classList.remove('future', 'present');
      }
}}, 1000);

let today = document.querySelector('#currentDay');
today.textContent = new Date().toLocaleDateString();

