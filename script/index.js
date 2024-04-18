const newNotesCreat = document.getElementById('creatNewNotes');
let num = 1
newNotesCreat.addEventListener('click', () => {

    const notes = document.getElementById('notes');
    const newNote = document.createElement('div');
    newNote.classList.add('newNote');
    newNote.setAttribute('id',`newNote${num}`);
    notes.appendChild(newNote);
   newNote.innerHTML += `
   <h1>Note</h1>
   <div contenteditable="true" class="note-content"  placeholder="Введите вашу заметку"></div>
   `
   const note = document.getElementById(`newNote${num}`);
    note.addEventListener('dblclick',(e) => {
    let del = confirm('dealet note?');
    if(del){
        e.target.parentNode.removeChild(e.target); 
    }
})

   num++
});



