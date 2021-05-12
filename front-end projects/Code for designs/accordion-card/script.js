let arrows = document.querySelectorAll('.icon-container')

arrows.forEach(arrow=>{
    arrow.addEventListener('click',e=>{
        e.preventDefault();
        arrow.parentElement.nextElementSibling.classList.toggle('display-hide');
        arrow.parentElement.nextElementSibling.classList.toggle('smooth-grow');
    })
})