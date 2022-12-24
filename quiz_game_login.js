function addUser(){
    let player1 = document.getElementById("player1_name_input").value;
    let player2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    if(player1!="" && player2!=""){
        window.location = 'quiz_game_page.html';
    }
    else{
        alert("You can\'t keep fields BLANK. Try AGAIN...");
    }
}