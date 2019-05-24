// everything menu related 
document.getElementById("hamburger").addEventListener('click', openMenu)

document.getElementById("dropDown").addEventListener('click', openSubMenu)

function openMenu() {
    $("#menuBody").toggleClass("show");
}

function openSubMenu() {
    event.preventDefault();
    $("#subMenu").toggleClass("show");

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
    }

});