function XO(str) {

  let characters = str.split('');

  let xCount = 0;
  for (let i=0; i <= characters.length; i++) {
      if(characters[i] === 'x' || characters[i] === 'X') {
        xCount++;
      }
  }
 
  let oCount = 0;
  for (let i=0; i <= characters.length; i++) {
      if(characters[i] === 'o' || characters[i] === 'O') {
        oCount++;
      }
  }

  if(oCount === 0 && xCount === 0) {
    return true;
  }
  
  if (xCount === oCount) {
  return true}
  else {
    return false}
   return str;
}
