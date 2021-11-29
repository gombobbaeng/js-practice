var salutations = ["안녕하세요", "반갑습니다"];
var i = 0;
setInterval(function () {
    i = 1 - i;
    document.querySelector("h1").innerHTML = salutations[i];
}, 1000)