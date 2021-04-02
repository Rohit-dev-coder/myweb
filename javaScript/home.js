// let t_bool = false;
// let btn = document.getElementById('tooglebtn');
// btn.onclick = function () {
//     if (t_bool == false) {
//         btn.setAttribute('src', './icons/outline_close_black_24dp.png');
//         t_bool = true;
//     } else {
//         btn.setAttribute('src', './icons/outline_menu_black_24dp.png');
//         t_bool = false;
//     }
// }
// window.onscroll = function () {
//     myFunction();
// };

// var header = document.getElementById("myconfig0");
// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

// window.onscroll = function () {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// };
$(document).ready(function(){
    $('#typewriteText').typewrite({
        continuous : true,
        blinkingCursor:true,
        actions: 
        [
            {delay: 1000},
            {type: '( Computer Science Engineer )'},
            {delay: 1500},
            {remove: {num: 27, type: 'stepped'}},
            {delay: 1300},
            {type: 'Developer )'},
            {delay: 2000},
            {remove: {num: 11, type: 'stepped'}},
            {type: 'Computer Science Engineer )'},
        ]
    });
});


let email,usrmessage;
function sendmsg(){
    email = $('#Email1').val();
    usrmessage = $('#msgarea').val();
    var data = {
        email: email,
        message: usrmessage,
    };
    console.log(data);
    // $.post("Servlet", data, processresponse);
}





