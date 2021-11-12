const textarea = document.querySelector('.textarea');
const tagsEl = document.querySelector('.tags');

textarea.focus();

textarea.addEventListener('keyup', (key)=>{
    if (key.key === 'Enter'){
        setTimeout(()=>{
            key.target.value = '';
            console.log (key.target);
        }, 10)

        randomizer();
    }
        createTags(key.target.value);

})

function createTags(input){
    // console.log (input);
    const tags =  input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim())

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = tag;
        tagsEl.appendChild(span);
    })
}

function randomizer(){
    const spans = document.querySelectorAll('span');
    console.log (123);

}
