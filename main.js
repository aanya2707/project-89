function addUser(){
    player1= document.getElementById("user_name_1").value;
    player2= document.getElementById("user_name_2").value;

    localStorage.setItem("Player_1" , player1);
    localStorage.setItem("Player_2" , player2);

    window.location.replace("quiz_game_page.html");
}