const today = new Date();

document.getElementById("today").innerHTML =
`${today.getFullYear()}年<br>
${today.getMonth()+1}月${today.getDate()}日`;

function openBudget(){
    alert("本日の予算ページは作成中です");
}

let todos =
JSON.parse(localStorage.getItem("todos")) || [];

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

                ${
                    todo.done
                    ?
                    `<div class="status complete">
                        <i class="fa-solid fa-check"></i>
                        目標を完了しました
                    </div>`
                    :
                    `<div class="status">
                        未完了
                    </div>`
                }

                <br>

                <button onclick="toggleTodo(${index})">
                    完了切替
                </button>

                <button onclick="deleteTodo(${index})">
                    削除
                </button>

            </div>

        </div>
        `;
    });

    saveTodos();
}

function addTodo(){

    const input =
    document.getElementById("todoInput");

    if(input.value.trim()===""){
        return;
    }

    todos.push({
        title:input.value,
        done:false
    });

    input.value="";

    renderTodos();
}

function toggleTodo(index){

    todos[index].done =
    !todos[index].done;

    renderTodos();
}

function deleteTodo(index){

    todos.splice(index,1);

    renderTodos();
}

renderTodos();
