const newNotes = document.getElementById('btn')

newNotes.addEventListener('click',()=>{
    const notes = document.getElementById('notes')
    
    notes.innerHTML += `
        <div class ="creatNewNotes">
        
        </div>
    `
    console.log('barev');
})
