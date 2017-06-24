/**
 * Created by wingsmm on 2017/6/10.
 */

//document.write("i");
/*document.write(" love ");
document.write(" you! ");*/


function fuck() {
    alert("fuck me");
}


function showMessage1() {
    var myMessage = confirm("Do you want to funk me?");
    if (myMessage == true){
        document.write("fuck me, o o o o o o");
    }else {
        document.write("fuck you!");
    }
}

function  showMessage2() {
    var score; //score变量，用来存储用户输入的成绩值。
    score = prompt("请输入你的成绩","根据输入的成绩做出评价");
    if(score>=90)
    {
        document.write("你很棒!");
    }
    else if(score>=75)
    {
        document.write("不错吆!");
    }
    else if(score>=60)
    {
        document.write("要加油!");
    }
    else
    {
        document.write("要努力了!");
    }
}


function windowOpen1() {
    window.open('http://www.imooc.com','_blank','width=600,height=400,top=100，left = 0,menubar=no,toolbar=no, status=no,scrollbars=yes')
}

function windowOpen2() {
    var mywin=window.open("http://www.imooc.com");
    mywin.close();
}


function test0207() {
    var message = confirm("你需要打开新窗口吗？");
    if (message == true){
        window.open("http://www.imooc.com/","_black","width = 600,height = 400, toolbar = no,status = no");
    }else {

    }
}

function dom1() {
    var com = document.getElementById("com").innerHTML;
    document.write("i love:" + com);
}

function test0303() {
    var mychar= document.getElementById("com") ;
    document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
    mychar.innerHTML = "hello world!";
    document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容
}

function test0304() {
    var mychar= document.getElementById("com") ;
    mychar.style.color="red";
    mychar.style.backgroundColor="#CCC";
    mychar.style.width="300px";
}


function test0305() {
    var message = confirm("你需要display吗？");
    var mychar= document.getElementById("com") ;
    if (message == true){
        mychar.style.display = "black";
    }else {
        mychar.style.display = "none";
    }
}

function test0306_1(){
    var p1 = document.getElementById("p1");
    p1.className="one";

}
function test0306_2(){
    var p2 = document.getElementById("p2");
    p2.className="two";

}