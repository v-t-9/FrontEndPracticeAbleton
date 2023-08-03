/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("nav-left").style.margin = "0em 0em 30em 0em";
    document.getElementById("nav-right").style.margin = "0em 0em 30em 0em";
    
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('.show')) {
            myDropdown.classList.remove('.show');
        }
    }
}