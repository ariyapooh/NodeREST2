function capToFront(s) {
    let capitals = '';
    let others = '';

    for (const char of s) {
        if (char === char.toUpperCase()) {
            capitals += char;
        } else {
            others += char;
        }
    }

    return capitals + others;
}

console.log(capToFront("hApPy"));     // "APhpy"
console.log(capToFront("moveMENT"));  // "MENTmove"
console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"
