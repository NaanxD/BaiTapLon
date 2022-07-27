var array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

var flag = 1;
var checkDrawFlag = true;
var checkNextTurnFlag = true;
var xScore = 0;
var oScore = 0;
var a=0;
var b=0;

var player = prompt("Nhập số điểm bạn mong muốn^^?");
player = input(prompt);

function getImage(x){
    if(x === "x"){
        return "images/x.png";
    }
    else if(x === "blank")
        return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    else{
        return "images/o.png";
    }
}

function setStartButton(){
    document.getElementById("img1").src = getImage("blank");
    document.getElementById("img2").src = getImage("blank");
    document.getElementById("img3").src = getImage("blank");
    document.getElementById("img4").src = getImage("blank");
    document.getElementById("img5").src = getImage("blank");
    document.getElementById("img6").src = getImage("blank");
    document.getElementById("img7").src = getImage("blank");
    document.getElementById("img8").src = getImage("blank");
    document.getElementById("img9").src = getImage("blank");
}

function checkNextTurn(){
    if(checkNextTurnFlag == true){
        if(flag == 1){
            document.getElementById("showStatusPlayer2").style.backgroundColor = "palegreen";
            document.getElementById("showStatusPlayer1").style.backgroundColor = "mintcream";
        }
        else if(flag == 0){
            document.getElementById("showStatusPlayer1").style.backgroundColor = "palegreen";
            document.getElementById("showStatusPlayer2").style.backgroundColor = "mintcream";
        }
    }
    else if(checkNextTurnFlag == false){
        if (flag==1){
            document.getElementById("turn1").innerHTML = "X thắng !!!";
            document.getElementById("showStatusPlayer2").style.backgroundColor = "ghostwhite";
            a++;
        }
        else if (flag==0){
            document.getElementById("turn2").innerHTML = "O thắng!!!";
            document.getElementById("showStatusPlayer1").style.backgroundColor = "ghostwhite";
            b++;
        }
    }   
        
    checkNextTurnFlag = true;
}

function disableButtonBlock(){
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn9").disabled = true;
}
function enableButtonBlock(){
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;
}
function checkWin(){
    //Test case 1
    if(array[0][0] != "" && array[1][0] != "" && 
    array[0][0] == array[1][0] && array[0][0] == array[2][0]){
        document.getElementById("btn1").style.backgroundColor = "lightgreen";
        document.getElementById("btn4").style.backgroundColor = "lightgreen";
        document.getElementById("btn7").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 2
    if(array[1][1] != "" && array[2][1] != "" && 
    array[0][1] == array[1][1] && array[0][1] == array[2][1]){
        document.getElementById("btn2").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn8").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 3
    if(array[1][2] != "" && array[2][2] != "" && 
    array[0][2] == array[1][2] && array[0][2] == array[2][2]){
        document.getElementById("btn3").style.backgroundColor = "lightgreen";
        document.getElementById("btn6").style.backgroundColor = "lightgreen";
        document.getElementById("btn9").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 4
    if(array[0][1] != "" && array[0][2] != "" && 
    array[0][0] == array[0][1] && array[0][0] == array[0][2]){
        document.getElementById("btn1").style.backgroundColor = "lightgreen";
        document.getElementById("btn2").style.backgroundColor = "lightgreen";
        document.getElementById("btn3").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 5
    if(array[1][1] != "" && array[1][2] != "" && 
    array[1][0] == array[1][1] && array[1][0] == array[1][2]){
        document.getElementById("btn4").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn6").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 6
    if(array[2][1] != "" && array[2][2] != "" && 
    array[2][0] == array[2][1] && array[2][0] == array[2][2]){
        document.getElementById("btn7").style.backgroundColor = "lightgreen";
        document.getElementById("btn8").style.backgroundColor = "lightgreen";
        document.getElementById("btn9").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 7
    if(array[1][1] != "" && array[2][2] != "" && 
    array[0][0] == array[1][1] && array[0][0] == array[2][2]){
        document.getElementById("btn1").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn9").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    //Test case 8
    if(array[1][1] != "" && array[2][0] != "" && 
    array[0][2] == array[1][1] && array[0][2] == array[2][0]){
        document.getElementById("btn3").style.backgroundColor = "lightgreen";
        document.getElementById("btn5").style.backgroundColor = "lightgreen";
        document.getElementById("btn7").style.backgroundColor = "lightgreen";

        if(flag == 1){
            document.getElementById("p1Score").style.backgroundColor = "lightgreen";
            xScore++;
        }
        else if(flag == 0){
            document.getElementById("p2Score").style.backgroundColor = "lightgreen";
            oScore++;
        }

        checkDrawFlag = false;
        checkNextTurnFlag = false;

        disableButtonBlock();
    }
    else if(array[0][0] != "" && array[0][1] != "" && array[0][2] != "" && 
            array[1][0] != "" && array[1][1] != "" && array[1][2] != "" &&
            array[2][0] != "" && array[2][1] != "" && array[2][2] != "" && checkDrawFlag == true){
                document.getElementById("turn1").innerHTML = "Hòa!";
                document.getElementById("turn2").innerHTML = "Hòa!";
                checkNextTurnFlag = true;
                disableButtonBlock();
            }
    checkNextTurn();
    checkDrawFlag = true;

}

function showScore(){
    document.getElementById("p1Score").innerHTML = xScore;
    document.getElementById("p2Score").innerHTML = oScore;
    if (player==a){
        alert("X đã chiến thắng chung cuộc!! Trang web sẽ load lại ngay!");
        setTimeout(reload,4000);}
    else if (player==b){
        alert("O đã chiến thắng chung cuộc!! Trang web sẽ load lại ngay!");
        setTimeout(reload,4000);
    }
}

function reload(){
    location.reload();
}

function playAgainButton(){
    enableButtonBlock();

    array[0][0] = "";
    array[0][1] = "";
    array[0][2] = "";
    array[1][0] = "";
    array[1][1] = "";
    array[1][2] = "";
    array[2][0] = "";
    array[2][1] = "";
    array[2][2] = "";

    setStartButton();

    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "white";
    document.getElementById("btn5").style.backgroundColor = "white";
    document.getElementById("btn6").style.backgroundColor = "white";
    document.getElementById("btn7").style.backgroundColor = "white";
    document.getElementById("btn8").style.backgroundColor = "white";
    document.getElementById("btn9").style.backgroundColor = "white";

    document.getElementById("turn1").innerHTML = "Người chơi 1: X";
    document.getElementById("turn2").innerHTML = "Người chơi 2: O";

    document.getElementById("showStatusPlayer1").style.backgroundColor = "white";
    document.getElementById("showStatusPlayer2").style.backgroundColor = "white";

    document.getElementById("p1Score").style.backgroundColor = "white";
    document.getElementById("p2Score").style.backgroundColor = "white";
    xScore = 0;
    oScore = 0;
    document.getElementById("p1Score").innerHTML = xScore;
    document.getElementById("p2Score").innerHTML = oScore
}

function playContinueButton(){
    enableButtonBlock();

    array[0][0] = "";
    array[0][1] = "";
    array[0][2] = "";
    array[1][0] = "";
    array[1][1] = "";
    array[1][2] = "";
    array[2][0] = "";
    array[2][1] = "";
    array[2][2] = "";

    setStartButton();

    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "white";
    document.getElementById("btn5").style.backgroundColor = "white";
    document.getElementById("btn6").style.backgroundColor = "white";
    document.getElementById("btn7").style.backgroundColor = "white";
    document.getElementById("btn8").style.backgroundColor = "white";
    document.getElementById("btn9").style.backgroundColor = "white";

    document.getElementById("turn1").innerHTML = "Người chơi 1: X";
    document.getElementById("turn2").innerHTML = "Người chơi 2: O";

    document.getElementById("showStatusPlayer1").style.backgroundColor = "white";
    document.getElementById("showStatusPlayer2").style.backgroundColor = "white";

    document.getElementById("p1Score").style.backgroundColor = "white";
    document.getElementById("p2Score").style.backgroundColor = "white";
    
    document.getElementById("p1Score").innerHTML = xScore;
    document.getElementById("p2Score").innerHTML = oScore
}

function setValueBtn1(){
    document.getElementById("btn1").setAttribute("disabled","disabled")
    if(flag == 1){
        array[0][0] = "x";
        document.getElementById("img1").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[0][0] = "o";
        document.getElementById("img1").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn2(){
    document.getElementById("btn2").setAttribute("disabled","disabled")
    if(flag == 1){
        array[0][1] = "x";
        document.getElementById("img2").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[0][1] = "o";
        document.getElementById("img2").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn3(){
    document.getElementById("btn3").setAttribute("disabled","disabled");
    if(flag == 1){
        array[0][2] = "x";
        document.getElementById("img3").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[0][2] = "o";
        document.getElementById("img3").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn4(){
    document.getElementById("btn4").setAttribute("disabled","disabled");
    if(flag == 1){
        array[1][0] = "x";
        document.getElementById("img4").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[1][0] = "o";
        document.getElementById("img4").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn5(){
    document.getElementById("btn5").setAttribute("disabled","disabled");
    if(flag == 1){
        array[1][1] = "x";
        document.getElementById("img5").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[1][1] = "o";
        document.getElementById("img5").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn6(){
    document.getElementById("btn6").setAttribute("disabled","disabled")
    if(flag == 1){
        array[1][2] = "x";
        document.getElementById("img6").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[1][2] = "o";
        document.getElementById("img6").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn7(){
    document.getElementById("btn7").setAttribute("disabled","disabled");
    if(flag == 1){
        array[2][0] = "x";
        document.getElementById("img7").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[2][0] = "o";
        document.getElementById("img7").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn8(){
    document.getElementById("btn8").setAttribute("disabled","disabled");
    if(flag == 1){
        array[2][1] = "x";
        document.getElementById("img8").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[2][1] = "o";
        document.getElementById("img8").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}

function setValueBtn9(){
    document.getElementById("btn9").setAttribute("disabled","disabled");
    if(flag == 1){
        array[2][2] = "x";
        document.getElementById("img9").src = getImage("x");
        checkWin();
        flag = 0;
        showScore();
        return;
    }
    else if(flag == 0){
        array[2][2] = "o";
        document.getElementById("img9").src = getImage("y");
        checkWin();
        flag = 1;
        showScore();
    }
}
