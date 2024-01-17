function highestDigit(num) {
    const digit = num.toString().split('');
    let maxdigit = 0;

    for (let digits of digit){
        maxdigit = Math.max(maxdigit, parseInt(digits))
    }

    return maxdigit;
  }

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
