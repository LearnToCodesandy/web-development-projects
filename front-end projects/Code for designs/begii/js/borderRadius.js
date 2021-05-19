let sliders = document.querySelectorAll('.rangeSlider');
let codeBr = document.querySelector('.codeBr');
let boxBr = document.querySelector('.box');

sliders.forEach(slider=>slider.addEventListener('change',e=>{
    e.preventDefault();
    let id = slider.getAttribute('id');

    if (id === "topLeft"){
        boxBr.style.borderTopLeftRadius = slider.value + "px";
        document.querySelector('#br-tl').textContent = slider.value + "px";
    }else if( id === "topRight"){
        boxBr.style.borderTopRightRadius = slider.value + "px";
        document.querySelector('#br-tr').textContent = slider.value + "px";
    }else if (id === "bottomRight"){
        boxBr.style.borderBottomRightRadius = slider.value + "px";
        document.querySelector('#br-br').textContent = slider.value + "px";
    }else if (id === "bottomLeft"){
        boxBr.style.borderBottomLeftRadius = slider.value + "px"; 
        document.querySelector('#br-bl').textContent = slider.value + "px";
    }
    
}))






let copyBtnClick = document.querySelector('.copyBtn');
copyBtnClick.addEventListener('click',e=>{
    e.preventDefault();
    if(copyBtnClick.textContent === "Copy"){
        console.log('entered!');
        copyToClipboard(codeBr.textContent);
        copyBtnClick.textContent = "Copied!";
        setTimeout(_=>copyBtnClick.textContent = "Copy",1000);
    }
})


// function to copy to clipobard
function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
