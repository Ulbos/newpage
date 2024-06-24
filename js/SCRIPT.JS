$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      margin:20,
      nav:true,
      loop:true,
     
       
    

      
    });
  });

document.body.addEventListener('click', collapsFunction);
function collapsFunction(event){
  if(!event.target.classList.contains('coll-btn')) return;
  const atr = event.target.getAttribute('data-toggle')
 const callapseBody = document.querySelector('#' + atr );
 if(callapseBody){
  callapseBody.classList.toggle('hide');
 }
}


// let btn = document.querySelector('.coll-btn')
// let elem = document.querySelector('.active')
// btn.onclick = function(){
// elem.classList.toggle('active')
// }



 /* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
 function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}