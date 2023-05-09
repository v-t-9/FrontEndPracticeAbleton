const btn = document.getElementById("drop-btn");
var menu = document.getElementById("drop-menu");

function showDropdown() {
    var menu = document.getElementById("drop-menu");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};
window.onclick = function (event) {
    if (!event.target.matches('.drop_btn')) {
        var menu = document.getElementById("drop-menu");
            menu.style.display = "none";
    }
}
// btn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     showDropdown();
// });