player_1= localStorage.getItem("Player_1");
player_2= localStorage.getItem("Player_2");

score_player_1= 0;
score_player_2= 0;

document.getElementById("player_1").innerHTML=player_1 + " : ";
document.getElementById("player_2").innerHTML=player_2 + " : ";

document.getElementById("Score_1").innerHTML= score_player_1;
document.getElementById("Score_2").innerHTML= score_player_2;

document.getElementById("Question_turn").innerHTML="Question Turn = " + player_1 ;
document.getElementById("Answer_turn").innerHTML="Answer Turn = " + player_2;

function Send(){
    number1 = document.getElementById("Number 1").value;
    number2 = document.getElementById("Number 2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    
    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

Question_turn = "player 1";
Answer_turn = "player 2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(Answer_turn == "player1"){
            score_player_1 = score_player_1 + 1;
            document.getElementById("Score_1").innerHTML= score_player_1;
        }
        else{
            score_player_2 = score_player_2 + 1;
            document.getElementById("Score_2").innerHTML= score_player_2;
        }

    }
    if(Question_turn == "player1"){
        Question_turn = "player_2";
        document.getElementById("Question_turn").innerHTML="Question Turn = " + player_1;
    }
    else{
        Question_turn = "player_1";
        document.getElementById("Question_turn").innerHTML="Question Turn = " + player_2;
    }  

    if(Answer_turn == "player1"){
        Answer_turn = "player_2";
        document.getElementById("Answer_turn").innerHTML="Answer Turn = " + player_2;
    }
    else{
        Answer_turn = "player_1";
        document.getElementById("Answer_turn").innerHTML="Answer Turn = " + player_1;
    }       
}