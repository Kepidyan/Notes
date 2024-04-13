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
   const note = document.getElementById('newNote');
    note.addEventListener('dblclick',(e) => {
    let del = confirm('dealet note?');
    if(del){
        deleteNote(id, element);
    }
})
   num++
});
function deleteNote(id, element) {
    const notes = getNotes().filter((note)=>note.id != id)
    saveNote(notes)
    appEl.removeChild(element)
}
function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}
function addNote() {
    const notes = getNotes();
    const noteObj = {
      id: Math.floor(Math.random() * 100000),
      content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
  
    notes.push(noteObj);
  
    saveNote(notes);
  }