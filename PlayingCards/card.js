
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const suits = ["♠", "♡", "♢", "♣"];
const deck = [];
let shuffle = [];




for (let suit = 0; suit < suits.length; suit++) {
	for (let value = 0; value < values.length; value++) {
  	deck.push(suits[suit] + values[value]);
  }
}
//console.log(deck);


function showDeck(){
  console.log(`Deck: ${deck}`);
}



function shuffleDeck() {
  shuffle = deck.slice();
  for (let i = 0; i < shuffle.length; i++) {
    // Get random number to make new position for each card in deck
    let random = Math.floor(Math.random() * shuffle.length);
    // Swap pos
    swapCard = shuffle[i];
    shuffle[i] = shuffle[random];
    shuffle[random] = swapCard;
  }
    //console.log(shuffle);
    console.log(`Shuffled Deck: ${shuffle}`);
}

function arrangeBySuit(){
	let arrange = shuffle.slice(0);
  arrange.sort();
  //console.log(arrange);
  console.log(`Arranged by Suit: ${arrange}`);
  return;
}



function arrangeByValue(shuffle){

  var jack = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('Jack') == true) {
      jack.push(shuffle[i])
    }
  }
  
  var queen = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('Queen') == true) {
      queen.push(shuffle[i])
    }
  }
  
  var king = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('King') == true) {
      king.push(shuffle[i])
    }
  }

  var one = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('Ace') == true) {
      one.push(shuffle[i])
    }
  }

  var two = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('2') == true) {
      two.push(shuffle[i])
    }
  }

  var three = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('3') == true) {
      three.push(shuffle[i])
    }
  }
  
  var four = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('4') == true) {
      four.push(shuffle[i])
    }
  }
  
  var five = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('5') == true) {
      five.push(shuffle[i])
    }
  }
  
  var six = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('6') == true) {
      six.push(shuffle[i])
    }
  }
  
  var seven = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('7') == true) {
      seven.push(shuffle[i])
    }
  }
  
  var eight = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('8') == true) {
      eight.push(shuffle[i])
    }
  }
  
  var nine = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('9') == true) {
      nine.push(shuffle[i])
    }
  }
  
  var ten = [];
  for (i = 0; i < shuffle.length; i++) {
    if (shuffle[i].includes('10') == true) {
      ten.push(shuffle[i])
    }
  }
 //console.log(one.concat(two,three,four,five,six,seven,eight,nine,ten,jack,queen,king));
 console.log(`Ascending: ${one.concat(two,three,four,five,six,seven,
 eight,nine,ten,jack,queen,king)}`);
  
 //console.log(one.concat(two,three,four,five,six,seven,eight,nine,ten,jack,queen,king).reverse());
 console.log(`Descending: ${one.concat(two,three,four,five,six,seven,
 eight,nine,ten,jack,queen,king).reverse()}`);

}



let dealCard=[];

function deal(){
  if(shuffle.length>0){  
  	dealCard = shuffle.shift();
  	convert(dealCard);
    console.log(`Remaining cards from the Deck: ${shuffle}`);
    //showDeck(shuffle);
    //if(shuffle.length===0){
    // console.log("No more cards left Bes");
    //}
  }else{
  	console.log("Empty Deck na Bes. Press Reset");
  }
}


function convert(card){
	let value=card.slice(1,shuffle.length);
  let suit=card.slice(0,1);
  let vCode;
  let sCode;
 
  if(value==="Ace"){
  	vCode="Ace";
  }else if(value==="2"){
  	vCode="Two";
  }else if(value==="3"){
  	vCode="Three";
  }else if(value==="4"){
  	vCode="Four";
  }else if(value==="5"){
  	vCode="Five";
  }else if(value==="6"){
  	vCode="Six";
  }else if(value==="7"){
  	vCode="Seven";
  }else if(value==="8"){
  	vCode="Eight";
  }else if(value==="9"){
  	vCode="Nine";
  }else if(value==="10"){
  	vCode="Ten";
  }else if(value==="Jack"){
  	vCode="Jack";
  }else if(value==="Queen"){
  	vCode="Queen";
  }else{
  	vCode="King";
  }
  
   
  if(suit==="♣"){
  	sCode="Clover";
  }else if(suit==="♠"){
  	sCode="Spades";
  }else if(suit==="♡"){
  	sCode="Hearts";
  }else{
  	sCode="Diamonds";
  }
  
  console.log(vCode+" of "+sCode);
}

 function dealFive(){
  if(shuffle.length>0){
  	dealCard = shuffle.splice(0,5);
    console.log(`Cards on Hand: ${dealCard}`);
    console.log(`Remaining cards from the Deck: ${shuffle}`);
  }else{
  	console.log("Empty Deck na Bes. Press Reset");
  }
} 



function reset(){
	location.reload();
}
























