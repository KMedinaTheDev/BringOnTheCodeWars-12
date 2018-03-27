var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {

  let numsArray= [], sum=0;
//   if input(count) is 0 the output should be the number(count) equal to 0
  if(count === 0) return count + '=' + 0;
//   if the input(count) is a negative number the output should be the number(count) < 0
   if(count < 0) return count + '<' + 0;
    // for loop to iterate through the array and add each integer
    for(let i = 0; i <= count; i++){
     sum += i;
//     each number added to the sum needs to be pushed into the array (numsArray)
     numsArray.push(i);
    }
//     the answer needs to display a string of the numbers joined by the addition symbol
// and equal to their sum (being held in the variable sum)
    return numsArray.join('+') + ' = ' + sum;
  };

  return SequenceSum;

})();
