//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all six functions below
function numOfSeeds(seeds){
  let result = 0;
  for(i=0; i<=seeds.length; i++;){
    if(seeds[i] !== null){
      result++;
    }
  }


}
function addSeed(name){
  seeds.push(name);

}
function removeSeed(seeds, name){
  for(i=0; i<seeds.length; i++){
    if(seeds[i]===name){
      return null;
    }
  }

}
function reportHealth(){
  let sum = 0;
  let count = 0;
  for(i=0; i<percent.length; i++){
    if(percent[i] !== 0){
      sum = sum + percent[i];
      count++;
    }
  }
  return sum/count;
}
function update(){
  for(i=0; i<percent.length; i++){
    let r = Math.random;
    if (r> 0.30){
      seeds[i] = null;
      percent[i] = r;
    }
    else if(r > percent[i]){
      recent[i] = r;
    }


  }
  
}

}

