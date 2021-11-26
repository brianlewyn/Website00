/* ========== Scroll Reveal Animation ========== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '5px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.Stn02, .Ad, .Ft`)


/* ========== Show Scroll Up ========== */ 
function ScrollUp() {
   const ScrollUp = document.getElementById('Scroll-Up');
   // When the scroll is higher than 460 viewport height, add the Show-Scroll class to the a tag with the scroll-top class
   if(this.scrollY >= 460) ScrollUp.classList.add('Show-Scroll'); else ScrollUp.classList.remove('Show-Scroll')
}
window.addEventListener('scroll', ScrollUp)
