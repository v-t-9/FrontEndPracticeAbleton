/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("nav-left").style.margin = "0px 0px 350px 0px";
    document.getElementById("nav-right").style.margin = "0px 0px 350px 0px";
    
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