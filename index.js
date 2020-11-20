document.getElementById('addhInput')
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
document.getElementById('addhInput')
document.getElementById('addText')
document.getElementById('contentBox')
