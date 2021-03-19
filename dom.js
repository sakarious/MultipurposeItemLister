let textValue = document.querySelector('#textValue')
let submit = document.querySelector('#btn-submit')
let WordOutput = document.querySelector('#aka')
let ResetButton = document.querySelector('#btn-reset')


let TextLi = document.createTextNode(textValue.value)

submit.addEventListener('click', () => {
    WordOutput.innerHTML = textValue.value;
    console.log(textValue.value);
    let newLiElement = document.createElement('li')
    newLiElement.className = 'list-group-item'

    let Litext = document.createTextNode(textValue.value)
    console.log(Litext)

    newLiElement.appendChild(Litext);
    console.log(newLiElement);

    let ul = document.querySelector('ul')
    console.log(ul)

    let li = document.querySelector('li');

    ul.insertBefore(newLiElement, li)

});

ResetButton.addEventListener('click', ()=>{
    console.log('Reset button was clicked')
    
})