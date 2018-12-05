

function addInput () {
    let inputBlock = document.createElement('div');
    inputBlock.className = 'inputBlock';
    inputBlock.setAttribute('id','search');
    inputBlock.innerHTML = "<form method=get><span>Input clip name:</span><input type='text' name='userRequest'><input type='button' value='Search'></form>";
    document.body.appendChild(inputBlock);   
}

export {addInput};