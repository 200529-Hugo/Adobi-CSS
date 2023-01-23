// Functions
function checkDefined(checkThis) {
    return ((checkThis) ? checkThis : false);
}

// Global var
const html = checkDefined(document.getElementsByTagName('html')[0]);
const header = checkDefined(document.getElementsByTagName('header')[0]);
const main = checkDefined(document.getElementsByTagName('main')[0]);
const content = checkDefined(document.getElementsByClassName('content')[0]);

// Nav
const onePage = checkDefined(document.querySelector('.onePage'));
if (onePage && main && main.querySelector('nav')) {
    mainNav = main.querySelector('nav')
    mainNav.style.height = html.offsetHeight - header.offsetHeight - 1 + 'px';
    if (content) {
        content.style.height = html.offsetHeight - header.offsetHeight - 1 + 'px';
        content.style.width = html.offsetWidth - mainNav.offsetWidth + 'px';
    }
} else if (onePage && main && !main.querySelector('nav')) {
    content.style.height = html.offsetHeight - header.offsetHeight - 1 + 'px';
    content.style.width = html.offsetWidth + 'px';
}

// Costum stuff

// Stars begin
function putStars() {
    const stars = checkDefined(document.getElementsByClassName('stars'))
    for (let j = 0; j < stars.length; j++) {
        const star = stars[j];
        const starParent = star.parentElement;
        star.style.background = 'red'

        var w = starParent.clientWidth;
        var h = starParent.scrollHeight - 2;
        var i = 1;
        if (checkDefined(star.dataset.stars)) {
            limit = checkDefined(star.dataset.stars)
        } else {
            if (w > 100 && w <= 475) {
                limit = 300;
            } else if (w > 475 && w <= 1000) {
                limit = 500;
            } else if (w > 1000) {
                limit = 750;
            }
        }

        var starColor = "orange";

        while (i < limit) {
            var topPos = randomPos(1, h);
            var leftPos = randomPos(1, w);
            var scale = randomPos(1, 10) / 10;
            var starRand = randomPos(1, 3);
            if (starRand == 1) {
                starColor = "yellow";
            } else if (starRand == 2) {
                starColor = "lightblue";
            } else {
                starColor = "white";
            }
            starNormal(starColor, topPos, leftPos, scale, star);
            i++;
        }
    }
}

function randomPos(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function starNormal(starColor, topPos, leftPos, scale, star) {
    var topPos = topPos - 1.5;
    var leftPos = ((leftPos <= 7) ? leftPos : leftPos - 7);
    var scale = scale;

    var starCreate = document.createElement("div");
    starCreate.setAttribute("id", "star");

    starCreate.setAttribute(
        "style",
        "background-color: " +
        starColor +
        "; top: " +
        topPos +
        "px; " +
        "left: " +
        leftPos +
        "px; " +
        "transform: scale(" +
        scale +
        ")"
    );
    star.appendChild(starCreate);
}

setTimeout(putStars, 100);
// Stars end

// Hover show begin
let hoverParentsElement = checkDefined(document.getElementsByClassName('hover-show-child'));
if (hoverParentsElement) {
    for (const hoverParentElement of hoverParentsElement) {
        hoverParentElement.onmouseover = function () {
            let hoverChildsElement = hoverParentElement.getElementsByClassName('waiting-for-hover');
            for (let j = 0; j < hoverChildsElement.length; j++) {
                const hoverChildElement = hoverChildsElement[j];
                hoverChildElement.style.display = 'block';
            }
        }
        hoverParentElement.onmouseleave = function () {
            let hoverChildsElement = hoverParentElement.getElementsByClassName('waiting-for-hover');
            for (let j = 0; j < hoverChildsElement.length; j++) {
                const hoverChildElement = hoverChildsElement[j];
                hoverChildElement.style.display = 'none';
            }
        }
    }
}

// Hover show end

// Scroll begin
$(document).ready(function () {
    var hovered = false;
    var loop = window.setInterval(function () {
        var autoScrolls = document.getElementsByClassName('scroll-auto');
        for (let i = 0; i < autoScrolls.length; i++) {
            const autoScroll = autoScrolls[i];
            $(autoScroll).hover(
                function () {
                    hovered = true;
                },
                function () {
                    hovered = false;
                }
            );
            if (!hovered) {
                pageScroll(autoScroll)
            }
        }
    }, 10);

    function pageScroll(object) {
        object.scrollBy(0, 1);
    }
});
// Scroll end

// Animate
// realHeader = document.getElementById('realHeader')
// adobi = document.getElementById('name')

// function getScrollPosition() {
//     if (window.pageYOffset) {
//         return window.pageYOffset;
//     } else if (document.documentElement.scrollTop) {
//         return document.documentElement.scrollTop;
//     } else if (document.body.scrollTop) {
//         return document.body.scrollTop;
//     }
//     return 0;
// }
// appearHeight = adobi.offsetTop + adobi.offsetHeight + 50
// window.onscroll = function () {
//     scrollPos = getScrollPosition();
//     if (scrollPos >= appearHeight) {
//         realHeader.style.display = 'block'
//     } else {
//         realHeader.style.display = 'none'
//     }
// }