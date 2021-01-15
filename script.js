var headerButtons = document.getElementsByClassName('header-button');
var sections = document.getElementsByTagName('section');

console.log(sections[3].getBoundingClientRect().top)
// Change background-color on side bar buttons when scrolling
window.onscroll = function () { 
    for (i = 0; i < headerButtons.length; i++) {
        var sectionPosition = sections[i].getBoundingClientRect().top
        if (sectionPosition > -300 && sectionPosition < 300) {
            headerButtons[i].classList.add("button-colored");
        } 
        else {
            headerButtons[i].classList.remove("button-colored");
        }
    }
};