var links = new Array("https://heelapitem.github.io/FinalProject/FestiGuru/hemisFestival.html","https://heelapitem.github.io/FinalProject/FestiGuru/underwaterMusicFestival.html","https://heelapitem.github.io/FinalProject/FestiGuru/mardiGrasFestival.html","https://heelapitem.github.io/FinalProject/FestiGuru/goldenRetrieverFestival.html");

function randompage() {
    var randIdx = Math.random() * links.length;
    randIdx = parseInt(randIdx, 10);
    var link = links[randIdx];
    window.open(link, "_self");
}

function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}
