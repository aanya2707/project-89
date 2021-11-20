function addUser(){
    player1= document.getElementById("player_1").value;
    player2= document.getElementById("player_2").value;

    localStorage.setItem("Player_1" , player1);
    localStorage.setItem("Player_2" , player2);

    window.location.replace("quiz_game_page.html");
}