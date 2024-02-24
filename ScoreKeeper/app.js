const player1 = document.querySelector("#player1Score");
let player1Score = parseInt(player1.innerText);
const player2 = document.querySelector("#player2Score");
let player2Score = parseInt(player2.innerText);
const player1Add = document.querySelector("#player1Add");
const player2Add = document.querySelector("#player2Add");
const reset = document.querySelector("#reset");
const select = document.querySelector("select");
let limit = 3;
select.addEventListener("change", function(){
    limit = parseInt(this.value);
})

player1Add.addEventListener("click",function(){
    let currScore = parseInt(player1.innerText)
    currScore += 1;
    if(currScore === limit){
        player1Add.disabled = true;
        player2Add.disabled = true;
        player1.style.color = "green";
        player2.style.color = "red";
    }
    player1.innerText = currScore;
})

player2Add.addEventListener("click",function(){
    let currScore = parseInt(player2.innerText)
    currScore += 1;
    if(currScore ===  limit){
        player1Add.disabled = true;
        player2Add.disabled = true;
        player1.style.color = "red";
        player2.style.color = "green";
    }
    player2.innerText = currScore;
})

reset.addEventListener("click",function(){
    player1Add.disabled = false;
    player2Add.disabled = false;
    player1.style.color = "black";
    player2.style.color = "black";
    player1.innerText = "0";
    player2.innerText = "0";
})
