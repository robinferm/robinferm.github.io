var headerButtons = [...document.getElementsByClassName('header-button')]
var sections = [...document.getElementsByTagName('section')]
//var sections = document.querySelectorAll('section');
var a = document.querySelectorAll('a')
var navMenu = document.getElementsByClassName('nav-menu');
var pageHeight = document.documentElement.scrollHeight;

//Change background-color on side bar buttons when scrolling
// window.onscroll = function () { 

//     console.log(pageHeight/6)
//     console.log(document.documentElement.scrollTop)
//     for (i = 0; i < headerButtons.length; i++) {
//         var sectionPosition = sections[i].getBoundingClientRect().top
//         var scrollDistanceFromTop = document.documentElement.scrollTop

//         if (scrollDistanceFromTop > pageHeight/4 && scrollDistanceFromTop < pageHeight/4) {
//             headerButtons[i].classList.add("button-colored");
//         } 
//         else {
//             headerButtons[i].classList.remove("button-colored");
//         }
//     }
// };

window.onscroll = function () {
    //console.log(sectionPosition)
    console.log('##')
    console.log(document.documentElement.scrollTop)
    console.log(sections[0].offsetTop)
    console.log(sections[1].offsetTop)
    console.log(sections[2].offsetTop)
    console.log(sections[3].offsetTop)

    var one = sections[0].getBoundingClientRect().top
    var two = sections[1].getBoundingClientRect().top
    var three = sections[2].getBoundingClientRect().top
    var four = sections[3].getBoundingClientRect().top

    var scrollDistanceFromTop = document.documentElement.scrollTop


    if (scrollDistanceFromTop <= sections[1].offsetTop -300) {
        console.log('1')
        headerButtons[0].classList.add("button-colored");

        headerButtons[1].classList.remove("button-colored");
        headerButtons[2].classList.remove("button-colored");
        headerButtons[3].classList.remove("button-colored");
    }
    if (scrollDistanceFromTop > sections[0].offsetTop + 300 && scrollDistanceFromTop <= sections[1].offsetTop + 300) {
        console.log('2')
        headerButtons[1].classList.add("button-colored");

        headerButtons[0].classList.remove("button-colored");
        headerButtons[2].classList.remove("button-colored");
        headerButtons[3].classList.remove("button-colored");
    }

    if (scrollDistanceFromTop > sections[1].offsetTop + 300 && scrollDistanceFromTop <= sections[2].offsetTop + 300) {
        console.log('3')
        headerButtons[2].classList.add("button-colored");

        headerButtons[0].classList.remove("button-colored");
        headerButtons[1].classList.remove("button-colored");
        headerButtons[3].classList.remove("button-colored");
    }

    if (scrollDistanceFromTop > sections[2].offsetTop + 300) {
        console.log('4')
        headerButtons[3].classList.add("button-colored");

        headerButtons[0].classList.remove("button-colored");
        headerButtons[1].classList.remove("button-colored");
        headerButtons[2].classList.remove("button-colored");
    }
};


// const colors = ['lightCyan', 'button-colored']

// window.addEventListener('scroll', function () {

//     const scrollFromTop = window.pageYOffset

//     for (let i = 0; sections.length > i; i++) {

//         if (scrollFromTop <= sections[i].offsetTop) {
//             headerButtons[i].className = colors[i]
//             //headerButtons[2].className = colors[i]
//             //headerButtons[i].className = ('button-colored')
//             //headerButtons[i].classList.add('button-colored')
//             break
//         }
//         else {
//             headerButtons[i].className = colors[i]
//         }
//         // if (scrollFromTop > sections[i].offsetTop) {
//         //     headerButtons[i].classList.remove('button-colored')
//         // }

//     }

// })


// var doc, bod, htm;
// addEventListener('load', function () {
    
//     doc = document; bod = doc.body; htm = doc.documentElement;
//     addEventListener('scroll', function () {
//         for (let i = 0; sections.length > i; i++) {
//             var sectionPosition = sections[i].getBoundingClientRect().top
//             headerButtons[i].style.backgroundColor = htm.scrollTop > sectionPosition ? 'blue' : 'red';
//         }
//     });
// });