// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar")
// const cols = document.querySelector(".navbar-collapse")

window.onscroll = function() {
    const top = window.scrollY;
    
    if(top >=100) {
        // header.classList.remove('navbar-collapseHome');
        header.classList.add('navbarDark');
    }
    // if(top >=99) {
    //     header.classList.remove('navbar-collapseHome');
    //     header.classList.add('navbar-collapseHome');
    // }
    else {
        header.classList.remove('navbarDark');
        // header.classList.remove('navbar-collapseHome');
    }
}
// // collapse navbar after click on small devices
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')

// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
// })
