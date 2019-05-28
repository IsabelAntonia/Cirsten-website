// everything menu related 
document.getElementById("hamburger").addEventListener('click', openMenu)
document.getElementById('dropDown1').addEventListener('click', openSubMenu)
document.getElementById('dropDown2').addEventListener('click', openSubMenu)
document.getElementById('main').addEventListener('click', toggleMenu)



function openMenu() {

    $("#menuBody").toggleClass("show");
    $("#subMenu1").removeClass("show");
    $("#menuBody").scrollTop(0);
    $("#main").toggleClass("darkBack");
}

function openSubMenu() {
    event.preventDefault();

    $("#subMenu1").toggleClass("show");
    $("#subMenu2").toggleClass("show");

}

function toggleMenu() {


    if (event.target != $("#menuBody")) {

        if ($("#menuBody").hasClass('show')) {

            $("#menuBody").removeClass("show");
            $("#main").removeClass("darkBack");

        }
    }
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