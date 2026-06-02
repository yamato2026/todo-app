const today = new Date();

document.getElementById("today").innerHTML =
`${today.getFullYear()}年<br>${today.getMonth()+1}月${today.getDate()}日`;

function openBudget(){
    alert("本日の予算ページは作成中です");
}

let todos =
JSON.parse(localStorage.getItem("todos")) || [];

let editIndex = -1;

function saveData(){
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function openModal(){

    editIndex = -1;

    document.getElementById("todoTitle").value="";
    document.getElementById("todoDetail").value="";

    document.getElementById("todoModal").style.display="flex";
}

function closeModal(){

    document.getElementById("todoModal").style.display="none";
}

function saveTodo(){

    const title =
    document.getElementById("todoTitle").value;

    const detail =
    document.getElementById("todoDetail").value;

    if(title.trim()===""){
        return;
    }

    if(editIndex===-1){

        todos.push({
            title:title,
            detail:detail,
            done:false
        });

    }else{

        todos[editIndex].title =
        title;

        todos[editIndex].detail =
        detail;
    }

    saveData();

    renderTodos();

    closeModal();
}

function editTodo(index){

    editIndex = index;

    document.getElementById("todoTitle").value =
    todos[index].title;

    document.getElementById("todoDetail").value =
    todos[index].detail;

    document.getElementById("todoModal").style.display =
    "flex";
}

function deleteTodo(){

    if(editIndex===-1) return;

    if(confirm("削除しますか？")){

        todos.splice(editIndex,1);

        saveData();

        renderTodos();

        closeModal();
    }
}

function toggleComplete(){

    if(editIndex===-1) return;

    todos[editIndex].done =
    !todos[editIndex].done;

    saveData();

    renderTodos();

    closeModal();
}

function renderTodos(){

    const list =
    document.getElementById("todoList");

    list.innerHTML="";

    todos.forEach((todo,index)=>{

        list.innerHTML += `

        <div
        class="todo-card"
        onclick="editTodo(${index})">

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

            </div>

        </div>

        `;
    });

}

renderTodos();
