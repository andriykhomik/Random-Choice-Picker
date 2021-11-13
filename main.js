const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e)=> {
    createTag(e.target.value);
})
function createTag(input){

    const tags = input.split(',').filter(tag=> {
        console.log (tag.trim());
        return tag.trim() !== ''})
    // const tags = input.split(',')
    // console.log (tags);
}

