// var message = document.querySelector(".message");
// var score = document.querySelector(".score");
// var buttons = document.querySelectorAll("button");
// var playerCount = document.querySelector('.player')
// var computerCount = document.querySelector('.computer')


// var winnerScore = [0, 0];


// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", play);
//   buttons[i].addEventListener('click', counter);
// }

// function play(event) {
//   var playerSelect = event.target.innerText;

//   var computerSelect = Math.random();

//   if (computerSelect < 0.34) {
//     computerSelect = "Камень";
//   } else if (computerSelect <= 0.67) {
//     computerSelect = "Бумага";
//   } else {
//     computerSelect = "Ножницы";
//   }

//   var result = checkWinner(playerSelect, computerSelect);


//   if (result === "Игрок") {
//     winnerScore[0]++;
//   }
 
//   if (result === "Компьютер") {
//     winnerScore[1]++;
//   }

//   console.log("Игрок:", playerSelect, "Компьютер:", computerSelect);
//   console.log('Победитель:'+ result, winnerScore);
// }

// function checkWinner(player, computer) {
//   if (player === "Камень" && computer === "Бумага" || 
//   player === 'Бумага' && computer === 'Ножницы' || 
//   player === 'Ножницы' && computer === 'Камень') {
//     return "Компьютер";
//   }

//   if (player === "Ножницы" && computer === "Бумага" || 
//   player ==="Камень" && computer === "Ножницы" ||
//   player ==="Бумага" && computer ==="Камень") {
//     return "Игрок";
//   } 

//   if  (player === 'Ножницы'&& computer ==="Ножницы" ||
//   player === 'Камень' && computer === 'Камень' ||
//   player === 'Бумага' && computer === 'Бумага'){
//    return 'Ничья';
//   } 

// }
// function counter(){
//    playerCount.innerHTML = winnerScore[0];
//    computerCount.innerHTML = winnerScore[1];
// }



var winnerScore = [0, 0]
var computerSelect = Math.floor(Math.random()*18)


class Play{
  constructor(player,computer){
      this.playerChoice = player
      this.computerChoice = computer
      this.winner =  [0,0]
  }
  
  get getplay(){
    if (this.computerChoice < 6) {
    this.computerSelect = "Камень";
    } else if (this.computerChoice <= 12) {
      this.computerSelect = "Бумага";
    } else {
      this.computerSelect = "Ножницы";
    }
    return  this.computerSelect
   }
   get compares(){
    if (this.playerChoice === "Камень" && this.computerSelect === "Бумага") {
      return this.compare="Компьютер";}
     else if (this.playerChoice === "Бумага" && this.computerSelect === "Ножницы") {
      return this.compare="Компьютер";}
     else if (this.playerChoice === "Ножницы" && this.computerSelect === "Камень") {
      return this.compare="Компьютер";
    }else if(this.playerChoice === this.computerSelect){
      return this.compare = "Ничья"
    }else{
      return this.compare = "Игрок"
    }
   }

   get checkWinner(){
    if (this.compare === "Игрок") {
      this.winner[0]++
    }else if (this.compare === "Компьютер") {
      this.winner[1]++;
    } else if (this.compare === "Ничья" ) {
      this.winner[0]++;
      this.winner[1]++;
    }
   }

}
 
const btn = document.querySelector('button')
const h2node = document.querySelector('h2')
const h3ode = document.querySelector('h3')
const h4node = document.querySelector('h4')
function StartGame(){
  let game =  new Play(prompt(),computerSelect)
  alert(`выбор компа: ${game.getplay}`)
  h2node.innerHTML = game.getplay
  alert(`Победа ${game.compares}`)
  h3ode.innerHTML = game.compares
  console.log(game.checkWinner)
  h4node.innerHTML= game.winner 
  alert(game.winner)
}

btn.addEventListener('click',StartGame)


