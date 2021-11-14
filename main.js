const textarea = document.querySelector('.textarea');
const tagsEl = document.querySelector('.tags');

textarea.focus();

textarea.addEventListener('keyup', (key)=>{
    if (key.key === 'Enter'){
        setTimeout(()=>{
            key.target.value = '';
            randomizer();
        }, 10)
    }
        createTags(key.target.value);
})

function createTags(input){
    if (!input){
        return
    }
    const tags =  input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim());

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
    if (spans.length === 0)return;
    let i = 0;
    let random = 0;
    const interval = setInterval(()=> {
        removeHighlight(spans);
        random = Math.floor(Math.random() * spans.length);
        spans[random].classList.add('highlight')
        i++
        if (i > 19) clearInterval(interval);
    }, 150)
}

function removeHighlight(spans){
    spans.forEach(span=>{
        span.classList.remove('highlight');
    })
}

