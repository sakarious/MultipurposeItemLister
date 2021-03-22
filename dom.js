//Catch the HTML text box and assigning it to a variable
const textValue = document.querySelector('#textValue')
//Catch the HTML submit button and assign it to a variable
const submit = document.querySelector('#btn-submit')
//Catch the HTML Reset button and assign it to a variable
const ResetButton = document.querySelector('#btn-reset')

submit.addEventListener('click', () => {
    //Create new li (HTML list item) element and assign it to variable "newLiElement"
    let newLiElement = document.createElement('li')

    //Add CSS class attribute "list-group-item" to the newly created element
    newLiElement.className = 'list-group-item'

    //Create Text Node for hold whatever text would be written into the HTML text box and assign to Litext variable.
    let Litext = document.createTextNode(textValue.value)
    //console.log(Litext)

    //Append the  text node into the HTML li element created 
    newLiElement.appendChild(Litext);
    //console.log(newLiElement);

    //Catch the HTML ul element and assigning it to a variable
    let HTMLul = document.querySelector('ul')
    //console.log(HTMLul)

    //Catch the HTML li element and assigning it to a variable
    let HTMLli = document.querySelector('li');

    //Now insert the Element created before the HTML li element
    HTMLul.insertBefore(newLiElement, HTMLli)
});

//Reset Button - Add click event then refresh page content
ResetButton.addEventListener('click', ()=>{
    window.location.reload();
    
}) 