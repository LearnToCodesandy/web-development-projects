let colorNameField = document.querySelector('#colorName');
let colorForPltField = document.querySelector('#colorValue');
let mainBox = document.querySelector('.boxWrapper');
let colors = [];

let addBtn = document.querySelector('.add-btn');
let finalizeBtn = document.querySelector('.finalize-btn');
let clearAllBtn = document.querySelector('.clear-btn');

addBtn.addEventListener('click',e=>{
    e.preventDefault();
    let colorName = colorNameField.value ;
    let colorForPltFieldValue = colorForPltField.value;
    if(colorName){
    colors.push({
        colorName,
        colorValue : colorForPltFieldValue
    });
        addBlock(colorForPltFieldValue);
        document.querySelector('#colorName').value = '';
    }
    
    // removing color upon click them
    // let clrBlocks = document.querySelectorAll('.clr-plt-div');
    // clrBlocks.forEach(clrBlock=>{
    //     clrBlock.addEventListener('click',e=>{
    //         e.preventDefault();
    //         let colorClr = clrBlock.style.backgroundColor.split(',');
    //         let red = parseInt(colorClr[0].split("(")[1]);
    //         let green = parseInt(colorClr[1].trim());
    //         let blue = parseInt(colorClr[2].trim().split(')')[0]);
    //         // console.log(colorClr,red,green,blue);
    //         let clrHex = rgbToHex(red,green,blue);
    //         let modifiedDataColors = [];
    //         for(color of colors){
    //             if(color.colorValue !== clrHex){
    //                 modifiedDataColors.push(color);
    //             }
    //         }
    //     })
    // })
})

function checkItem(colorItem){
    return colorItem.colorValue !== clrHex
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

clearAllBtn.addEventListener('click',e=>{
    e.preventDefault();
    removeAll();
})


let copyBtnCode = document.querySelector('.copy-plt');
copyBtnCode.addEventListener('click',e=>{
    e.preventDefault();
    if(copyBtnCode.textContent === "Copy"){
        copyToClipboard(document.querySelector('.plt-code').textContent);
        copyBtnCode.textContent = "Copied!";
        setTimeout(_=>copyBtnCode.textContent = "Copy",1000);
    }
})


function addBlock(color){
    let colorDiv = document.createElement('div');
    colorDiv.classList.add('clr-plt-div');
    colorDiv.style.backgroundColor = color;
    mainBox.appendChild(colorDiv);
    makeJSON(colors);
}

function removeBlock(reference){
    reference.addEventListener('click',e=>{
        e.preventDefault();
        mainBox.removeChild(reference);
    });
}

function makeJSON(colors){
    let codeEle = document.querySelector('.plt-code');
    let jsonList = [];
    for (color of colors){
        let clrName = `--clr-${color.colorName}`;
        let clrValue = `${color.colorValue}`;
        jsonList.push(`${clrName} : ${clrValue}`);
    }
    codeEle.textContent = jsonList.join('; ');
}

function removeAll(){
    colors = [];
    mainBox.innerHTML = '';
}

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
