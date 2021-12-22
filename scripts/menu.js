let mob_nav = document.getElementById('mob-nav');
let header_bars = document.getElementById('header-bars');
header_bars.addEventListener("click", showNav);

function showNav() {
    if (mob_nav.style.display === "none") {
        mob_nav.style.display = 'flex';
    } else {
        mob_nav.style.display = 'none';
    }
}