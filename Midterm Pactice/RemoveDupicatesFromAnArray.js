function removeDups(arr) {
     // ใช้ Set เพื่อลบค่าซ้ำ
     const word = new Set(arr);
     // แปลงกลับเป็นอาร์เรย์
     return Array.from(word);
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));