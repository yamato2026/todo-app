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
/* スマホ対応 */

body{
    margin:0;
    overflow-x:hidden;
}

.header{
    padding:20px;
}

.topbar h1{
    font-size:32px;
}

.user h2{
    font-size:28px;
}

.date{
    font-size:18px;
}

.timeline{
    padding:15px;
}

.todo-card{
    width:100%;
}

.number{
    width:45px;
    height:45px;
    font-size:20px;
}

.content{
    width:calc(100% - 60px);
}

.content h3{
    font-size:20px;
}

.content p{
    font-size:16px;
}

.status{
    font-size:16px;
}

.budget-card{
    width:100%;
}

.bottom-nav{
    height:80px;
}

.bottom-nav button{
    font-size:12px;
}

.bottom-nav i{
    font-size:22px;
}

.center-btn{
    width:60px;
    height:60px;
}

@media (max-width: 480px){

    .topbar h1{
        font-size:26px;
    }

    .user h2{
        font-size:22px;
    }

    .content h3{
        font-size:18px;
    }

    .content p{
        font-size:14px;
    }

    .number{
        width:40px;
        height:40px;
        font-size:18px;
    }

    .budget-card{
        padding:18px;
    }

}
