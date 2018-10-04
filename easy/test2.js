function cardMaker(){
  let jack=11
  let queen=12
  let king=13
  let kartuAs =14
  let love=0
  let diamond=1
  let keriting=2
  let sekop=3

  let card=[]
  for(let i=0;i<5;i++){
    let nomor=Math.floor(Math.random() * 14) + 2
    let jenis=Math.floor(Math.random() *3)
    if(nomor>10){
      //Jack
      if(nomor===jack && jenis===keriting){
        nomor='J'
        jenis='K'
      }
      else if(nomor===jack && jenis===love){
        nomor='J'
        jenis='H'
      }
      else if(nomor===jack && jenis===diamond){
        nomor='J'
        jenis='W'
      }
      else if(nomor===jack && jenis===sekop){
        nomor='J'
        jenis='S'
      }
      //queen
      else if(nomor===queen && jenis===keriting){
        nomor='Q'
        jenis='K'
      }
      else if(nomor===queen && jenis===love){
        nomor='Q'
        jenis='H'
      }
      else if(nomor===queen && jenis===diamond){
        nomor='Q'
        jenis='W'
      }
      else if(nomor===queen && jenis===sekop){
        nomor='Q'
        jenis='S'
      }
      //king
      else if(nomor===king && jenis===keriting){
        nomor='K'
        jenis='K'
      }
      else if(nomor===king && jenis===love){
        nomor='K'
        jenis='H'
      }
      else if(nomor===king && jenis===diamond){
        nomor='K'
        jenis='W'
      }
      else if(nomor===king && jenis===sekop){
        nomor='K'
        jenis='S'
      }
      //as
      else if(nomor===kartuAs && jenis===keriting){
        nomor='A'
        jenis='K'
      }
      else if(nomor===kartuAs && jenis===love){
        nomor='A'
        jenis='H'
      }
      else if(nomor===kartuAs && jenis===diamond){
        nomor='A'
        jenis='W'
      }
      else {
        nomor='A'
        jenis='S'
      }

    }
    else{
      if(jenis===keriting){
        jenis='K'
      }
      else if(jenis===love){
        jenis='H'
      }
      else if(jenis===sekop){
        jenis='S'
      }
      else{
        jenis='W'
      }
    }
    card.push(nomor+jenis)
  }
  return card
}
function generateCardInHand() {
  // put your code here
  let kondisi=false
  while(kondisi===false){
    let cardResult=cardMaker()
    let pair=0
    for(let i=0;i<cardResult.length;i++){
      let currentNomor=cardResult[i].substring(0,cardResult[i].length-1)
      for(let j=0;j<cardResult.length;j++){
        let checkNomor=cardResult[j].substring(0,cardResult[i].length-1)
        
        if(currentNomor===checkNomor && i !== j){
          pair +=1
          break;
        }
      }
    }
    if(pair===4){
      console.log(cardResult)
      kondisi=true;
    }
  }
}


generateCardInHand() // [ '10S', '10K', 'JH', 'JS', '2K']
generateCardInHand() // [ '2S', '2K', '10H', '10L', '4K']