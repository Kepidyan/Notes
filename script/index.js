const newNotes = document.getElementById('creatNewNotes');
let num = 1
newNotes.addEventListener('click', () => {
    const notes = document.getElementById('notes');
    const newNote = document.createElement('div');
    newNote.classList.add('newNote');
    newNote.setAttribute('id','newNote')
    notes.appendChild(newNote);
   newNote.innerHTML += `
   <h1>Note ${num}</h1>
   <div contenteditable="true" class="note-content"  placeholder="Введите вашу заметку"></div>
   
   `
   num++
});

const note = document.getElementById('newNote');
note.addEventListener('dblclick',() => {
    alert('dealet note?');
    console.log('barev');
})