// everything menu related 
document.getElementById("hamburger").addEventListener('click', openMenu)

console.log(document.getElementById('dropDown1'));
document.getElementById('dropDown1').addEventListener('click', openSubMenu)
document.getElementById('dropDown2').addEventListener('click', openSubMenu)


function openMenu() {
    $("#menuBody").toggleClass("show");
    $("#main").toggleClass("darkBack");
}

function openSubMenu() {
    event.preventDefault();

    $("#subMenu1").toggleClass("show");
    $("#subMenu2").toggleClass("show");

}


$(window).on("scroll", function () {

    if ($("#menuBody").hasClass('show')) { // while scrolling menu is open - close it 
        $("#menuBody").removeClass("show");
    }

    if ($(window).scrollTop() > ($('#menuHeader').outerHeight())) {
        $("#menuHeader").addClass("fixed");
        $("#menuBody").addClass("fixMenu");

    }

    if ($(window).scrollTop() <= ($('#menuHeader').outerHeight())) {
        $("#menuHeader").removeClass("fixed");
        $("#menuBody").removeClass("fixMenu");
        $("#main").removeClass("darkBack");
    }

});