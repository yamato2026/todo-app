const today = new Date();

document.getElementById("today").innerHTML =
`${today.getFullYear()}年<br>${today.getMonth()+1}月${today.getDate()}日`;

function openBudget(){
    alert("本日の予算ページは作成中です");
}

function openModal(){
    document.getElementById("todoModal").style.display="flex";
}

function closeModal(){
    document.getElementById("todoModal").style.display="none";
}

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos(){
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function renderTodos(){

    const list =
    document.getElementById("todoList");

    list.innerHTML = "";

    todos.forEach((todo,index)=>{

        list.innerHTML += `
        <div class="todo-card">

            <div class="number">
                ${index+1}
            </div>

            <div class="content">

                <h3>${todo.title}</h3>

                <p>${todo.detail}</p>

                <div class="status">
                    未完了
                </div>

            </div>

        </div>
        `;
    });

}

function saveTodo(){

    const title =
    document.getElementById("todoTitle").value;

    const detail =
    document.getElementById("todoDetail").value;

    if(title.trim()===""){
        return;
    }

    todos.push({
        title:title,
        detail:detail
    });

    saveTodos();

    renderTodos();

    document.getElementById("todoTitle").value="";
    document.getElementById("todoDetail").value="";

    closeModal();
}

renderTodos();
