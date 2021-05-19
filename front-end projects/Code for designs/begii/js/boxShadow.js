// get references to elements
// live value updation : both in the box as well as in the code!

let controllers = document.querySelectorAll('.controller');
let box = document.querySelector('.boxShadowBox');
let code = document.querySelector('code');

// upon page load show some default box shadow
box.style.boxShadow = "0 0 10px 1px #000";

controllers.forEach(controller => controller.addEventListener('change',e=>{
    e.preventDefault();
    let styleString = getValues();
    if (controller.getAttribute('id') === "boxColor"){
        box.style.backgroundColor = controller.value;
    }
    // console.log(styleString);
    box.style.boxShadow = styleString;
}));

function getValues(){
    let values = [];
    for (item of controllers){
        values.push(item.value);
    }
    let horOffset = document.querySelector('#hor-offset-val');
    let verOffset = document.querySelector('#ver-offset-val');
    let spread = document.querySelector('#spread-val');
    let blur = document.querySelector('#blur-val');
    let color = document.querySelector('#color-val');
    let boxShadowString = `${values[0]}px ${values[1]}px ${values[2]}px ${values[3]}px ${values[5]}`;
    
    // changing the code string
    horOffset.textContent = values[0] + "px";
    verOffset.textContent = values[1] + "px";
    spread.textContent = values[2] + "px";
    blur.textContent = values[3] + "px";
    color.textContent = values[5];
    return boxShadowString;
}

let copyBtn = document.querySelector('.copy');
copyBtn.addEventListener('click',e=>{
    e.preventDefault();
    if(copyBtn.textContent === "Copy"){
        copyToClipboard(code.textContent);
        copyBtn.textContent = "Copied!";
        setTimeout(_=>copyBtn.textContent = "Copy",1000);
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
