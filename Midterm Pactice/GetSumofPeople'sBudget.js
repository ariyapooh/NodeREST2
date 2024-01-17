function getBudgets(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index].budget;
    }
    return sum;
}
console.log(getBudgets([
    { nume: "John", age: 21, budget: 23000 },
    { nume: "Steve", age: 32, budget: 40000 },
    { nume: "Martin", age: 16, budget: 2700 }
]));
console.log(getBudgets([
    { nume: "John", age: 21, budget: 29000 },
    { nume: "Steve", age: 32, budget: 32000 },
    { nume: "Martin", age: 16, budget: 1600 }
]));
