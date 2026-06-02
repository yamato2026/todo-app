const today = new Date();

document.getElementById("today").innerHTML =
`${today.getFullYear()}年<br>
${today.getMonth()+1}月${today.getDate()}日`;

function openBudget(){

alert(
`本日の予算

予算ページは作成中です`
);

}

function openModal(){

document.getElementById(
"todoModal"
).style.display="flex";

}

function closeModal(){

document.getElementById(
"todoModal"
).style.display="none";

}

function saveTodo(){

const title =
document.getElementById(
"todoTitle"
).value;

const detail =
document.getElementById(
"todoDetail"
).value;

if(title==="") return;

const list =
document.getElementById(
"todoList"
);

const count =
document.querySelectorAll(
".todo-card"
).length+1;

list.innerHTML += `
<div class="todo-card">

<div class="number">
${count}
</div>

<div class="content">

<h3>${title}</h3>

<p>${detail}</p>

<div class="status">
未完了
</div>

</div>

</div>
`;

closeModal();

document.getElementById(
"todoTitle"
).value="";

document.getElementById(
"todoDetail"
).value="";

}
