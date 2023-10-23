


function controllMenu(){
    document.getElementById('header-menu').classList.toggle('active');
}


var headerSection = document.getElementById('header-section');
var headerContainer = document.getElementById('header-container');




window.addEventListener('scroll', changeHeaderBg = () =>{
    var scrolledAmount = window.scrollY;
    if(scrolledAmount > 100){
        headerSection.style.backgroundColor = '#2A2D48';
        headerContainer.style.border = 'none';
    }
    else{
        headerSection.style.backgroundColor = 'transparent';
        headerContainer.style.borderBottom = '1px solid rgba(255, 255, 255,0.2)';
    }
});