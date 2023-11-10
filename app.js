function disp(){
  alert("Thanks for purchasing from us")
}

function removeElement(button){
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function replaceImage(){
  // this.width =20%
  document.getElementById("pic").src="./OnePlus-10-PRO-EEZEPC-1.jpg"
}
 
function restoreImage(){
  // this.src="./OnePlus-10-PRO-EEZEPC-1.jpg";
  document.getElementById("pic").src="./0508c983c4996e52fdf931d581b2171c.jpg_750x750.jpg_.webp"
}

let counterValue = 0;

function updateCounter(){
  document.getElementById('counter').innerText = counterValue;
}

function increaseCounter(){
  counterValue++;
  updateCounter();
}

function decreaseCounter(){
  if(counterValue > 0){
    counterValue--;
    updateCounter();
  }
}