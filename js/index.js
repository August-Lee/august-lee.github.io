var index = 0;
var n = 0;
var word = document.getElementById("w").innerHTML;
var z = word.length;
var word1 = document.getElementById("h").innerHTML;
var p = word1.length;
console.log(z);
function type() {
    document.getElementById("css").innerText = word.substring(0, index++);
    document.getElementById("content").innerText = word.substring(0, index++);
    if (index == z) {
        clearInterval(j);
        var i = setInterval(type2, 100)
    } else {
        $(".styleEditor").scrollTop(100000)
    }
}
function type2() {
    document.getElementById("resume").innerText = word1.substring(0, n++);
    if (n == p) {
        clearInterval(i)
    }
}
var j = setInterval(type, 100);