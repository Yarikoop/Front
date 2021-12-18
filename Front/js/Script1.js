// JavaScript source code
var bgs = ["mountain.jpg", "mountain2.jpg", "mountain3.jpg", "mountain4.jpg", "mountain5.jpg"];
flag = 1;
function ggg(value) {
    /*alert("Hello" )
    alert('Привіт')*/
    
    if (value == "secret button") {
        alert('Вітаю! Ви знайшли таємну кнопку, нажміть на неї!');
        var btn = document.getElementById('sb');
        btn.style.color = "black";
        btn.style.borderRadius = "4px";
        btn.style.border = "black";
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "#63d11f";


    }
}
function chngBg() {
    if (flag > 4) {
        flag = 0
    }
    document.body.style.backgroundImage = "url(../img/" + bgs[flag] + ")"
    flag++

    /*var bg = document.body.style.backgroundImage
    bg.removeAttribute('url')
    bg.setAttribute("url", "../img" + bgs[flag])
*/

}



//document.body.style.backgroundImage