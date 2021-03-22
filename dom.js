const textValue = document.querySelector('#textValue')
const submit = document.querySelector('#btn-submit')
const WordOutput = document.querySelector('#aka')
const ResetButton = document.querySelector('#btn-reset')

submit.addEventListener('click', () => {
    WordOutput.innerHTML = textValue.value;
    //console.log(textValue.value);
    let newLiElement = document.createElement('li')
    newLiElement.className = 'list-group-item'

    let Litext = document.createTextNode(textValue.value)
    console.log(Litext)

    newLiElement.appendChild(Litext);
    console.log(newLiElement);

    let HTMLul = document.querySelector('ul')
    console.log(HTMLul)

    let HTMLli = document.querySelector('li');

    HTMLul.insertBefore(newLiElement, HTMLli)

});

ResetButton.addEventListener('click', ()=>{
    window.location.reload();
    
}) 