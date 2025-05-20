// trip-heading
let trip_heading=document.querySelector('#trip_heading');
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 200){
        trip_heading.classList.remove('display-none');
     
 } else {
    trip_heading.classList.add('display-none');
}
})