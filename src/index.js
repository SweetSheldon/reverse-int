module.exports = function reverse (n) {
    // var result = (n).toString().split("").reverse().join("");
    // if(result[result.length-1]=='-'){return result.slice(0,-1)}
    // else{return result}
 return Math.abs(n).toString().split("").reverse().join("")
}
