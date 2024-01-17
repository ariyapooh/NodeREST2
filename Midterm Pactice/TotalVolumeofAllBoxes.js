function totalVolume(...arg) {
    var total = 0;

    for (var i = 0; i < arg.length; i++) {
        var box = arg[i];
        total += box[0] * box[1] * box[2]; // คำนวณปริมาตรของแต่ละกล่อง
    }

    return total;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));  // 63
console.log(totalVolume([2, 2, 2], [2, 1, 1]));                        // 10
console.log(totalVolume([1, 1, 1]));                                   // 1
