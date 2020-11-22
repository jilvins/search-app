let addInput = document.getElementById('addInput')
let contentBox = document.getElementById('contentBox')
let addBox = document.getElementById('addBox')
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    let searchPhrase = event.target.value.toLowerCase();
    let textForSearch = document.getElementsByClassName('content');

    for (let counter = 0; counter < textForSearch.length; counter++) {
        const thatContent = textForSearch[counter].textContent.toLowerCase();
        console.log(thatContent);

        if (thatContent.includes(searchPhrase)) {
            textForSearch[counter].style.display = 'block'
        } else 
            textForSearch[counter].style.display = 'none'
        
    }
});
 

function addSearch (event) {
    
    event.preventDefault();
    const newLi = document.createElement('li')
    newLi.className = 'content' 
    newLi.innerText = addInput.value
    contentBox.appendChild(newLi)
    addInput.value = ''
    
}
function removeElement () {
    contentBox.removeChild(contentBox.childNodes[0])
}

addBox.addEventListener('submit', addSearch)
   


