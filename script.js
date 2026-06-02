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

let todos =
JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos(){
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function toggleTodo(index){

    todos[index].done =
    !todos[index].done;

    saveTodos();
    renderTodos();
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

                ${
                    todo.done
                    ?
                    `
                    <div class="status complete">
                        <i class="fa-solid fa-check"></i>
                        目標を完了しました
                    </div>
                    `
                    :
                    `
                    <div class="status">
                        未完了
                    </div>
                    `
                }

                <br>

                <button
                onclick="toggleTodo(${index})"
                class="complete-btn">

                ${
                    todo.done
                    ?
                    "未完了に戻す"
                    :
                    "完了"
                }

                </button>

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
        detail:detail,
        done:false
    });

    saveTodos();

    renderTodos();

    document.getElementById("todoTitle").value="";
    document.getElementById("todoDetail").value="";

    closeModal();
}

renderTodos();
