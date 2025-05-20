const cards = document.querySelectorAll('.card');
cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        if(!card.classList.contains('selected')){
        cards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        }else{
        cards.forEach((c) => c.classList.remove('selected'));
        }
    });
})


const openPosterCont = document.getElementById('openPoster');
const openPosterImg = document.getElementById('openPosterImg');
let posterOpen;
function openPoster(imgPath){
    openPosterCont.style.display = 'flex';
    openPosterImg.src = '/images/posters/' + imgPath;
    posterOpen = true;
}

function closePoster(){
    openPosterCont.style.display = 'none';
    posterOpen = false;
}

openPosterCont.addEventListener('click', (e) => {
    if (e.target === openPosterCont) closePoster();
});