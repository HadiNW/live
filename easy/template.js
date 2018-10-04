function generateCard(){
  let jack=11
  let queen=12
  let king=13
  let kartuAs =14
  let love=0
  let diamond=1
  let keriting=2
  let sekop=3
  let card=[]

  // ['2k','3k','4k','5k','6k','7k','8k','9k','10k','Jk','Qk','Kk','Ak'], //K
  // ['2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH'], // H
  // ['2W','3W','4W','5W','6W','7W','8W','9W','10W','JW','QW','KW','AW'], // W
  // ['2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS'] //S


  for(let i=0;i<5;i++){
    let no=Math.floor(Math.random() * 14) + 2
    let kind=Math.floor(Math.random() *3)
    if(no>10){
  
      if(no===jack && kind===keriting){ //J
        no='J'
        kind='K'
      }
      else if(no===jack && kind===love){
        no='J'
        kind='H'
      }
      else if(no===jack && kind===diamond){
        no='J'
        kind='W'
      }
      else if(no===jack && kind===sekop){
        no='J'
        kind='S'
      }
 
      else if(no===queen && kind===keriting){ //Q
        no='Q'
        kind='K'
      }
      else if(no===queen && kind===love){
        no='Q'
        kind='H'
      }
      else if(no===queen && kind===diamond){
        no='Q'
        kind='W'
      }
      else if(no===queen && kind===sekop){
        no='Q'
        kind='S'
      }
    
      else if(no===king && kind===keriting){   //king
        no='K'
        kind='K'
      }
      else if(no===king && kind===love){
        no='K'
        kind='H'
      }
      else if(no===king && kind===diamond){
        no='K'
        kind='W'
      }
      else if(no===king && kind===sekop){
        no='K'
        kind='S'
      }
    
      else if(no===kartuAs && kind===keriting){ //A
        no='A'
        kind='K'
      }
      else if(no===kartuAs && kind===love){
        no='A'
        kind='H'
      }
      else if(no===kartuAs && kind===diamond){
        no='A'
        kind='W'
      }
      else {
        no='A'
        kind='S'
      }

    }
    else{
      if(kind===keriting){
        kind='K'
      }
      else if(kind===love){
        kind='H'
      }
      else if(kind===sekop){
        kind='S'
      }
      else{
        kind='W'
      }
    }
    card.push(no+kind)
  }
  return card
}
function generateCardInHand() {
  let isTrue=false
  while(isTrue===false){
    let cardResult=generateCard()
    let pair=0
    for(let i=0;i<cardResult.length;i++){
      let currentno=cardResult[i].substring(0,cardResult[i].length-1)
      for(let j=0;j<cardResult.length;j++){
        let checkno=cardResult[j].substring(0,cardResult[i].length-1)
        
        if(currentno===checkno && i !== j){
          pair +=1
          break;
        }
      }
    }
    if(pair===4){
      console.log(cardResult)
      isTrue=true;
    }
  }
}

generateCardInHand() // [ '10S', '10K', 'JH', 'JS', '2K']
generateCardInHand() // [ '2S', '2K', '10H', '10L', '4K']