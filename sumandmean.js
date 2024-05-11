let sumArray = 0;
let meanArray = 0;

let array = [22,5,8,38,6,12];

function calculate() {
    sumArray = 0;
	for (let i = 0; i < array.length; i++) {
		sumArray += array[i];
	}
    meanArray = sumArray/array.length
    // round up the mean reasult
    meanArray = meanArray.toFixed(2);
    insertResult();
}
console.log(sumArray);
console.log(meanArray);

function insertResult() {
    let result = document.getElementsByClassName('result');
    for (let i = 0; i < result.length; i++) {
      result[i].innerHTML = sumArray + ' & ' + meanArray;
    }
  }

document.querySelector('.equals-sign').addEventListener('click', calculate);