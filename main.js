// Write your code below
const bobsFollowers = ['loic' , 'oli', 'mona', 'jojo'];
const tinasFollowers = ['loic', 'oli', 'kali' ];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j <tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}



