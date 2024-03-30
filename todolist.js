const arr = [];
const arr1=[];
function add() {
  const a = document.querySelector(".task1").value;
  arr.push(a);
  const b = document.querySelector(".task2").value;
  arr1.push(b);
  
  document.querySelector(".task1").value = "";
  document.querySelector(".task2").value = "";
  display();
}
display();

function display() {
  let listitem = "";
  for (let i = 0; i < arr.length; i++) {
    const list = arr[i];
    const list1=arr1[i];
    const html = `<div>${i+1}. ${list}</div>
    <div>
    ${list1}</div>
    <button class="delbtn" onclick="
    arr.splice(${i},1);
    arr1.splice(${i},1);
    display();
    ">Delete</button>`;
    listitem = listitem + html;
  }

  document.querySelector(".tasks").innerHTML = listitem;
  document.querySelector('.number').innerHTML=`(Number Of Pending Tasks : ${arr.length})`;
}