var Notes = JSON.parse(localStorage.getItem("Notes")) || [{"Title":"Notes introduction","Text":"In the main menu click the \"new note\" button in the top right to create a blank note.\n\nIn the main menu right click a note to delete it.\n\nClick the back button in the top left to exit."}]

function SaveNotes() {
    localStorage.setItem("Notes", JSON.stringify(Notes))
}
function CreateNotesHomeScreen() {
    let AllNotes = document.querySelectorAll(".note")
    AllNotes.forEach(function(Note) {
        Note.remove()
    });
    for (let i = 0; i < Notes.length; i++) {
        let CurrentNote = Notes[i]
        let NewNote = document.createElement("div")
        let NewNoteTitle = document.createElement("div")

        NewNote.classList.add("note")
        NewNoteTitle.classList.add("note-title")

        NewNoteTitle.textContent = CurrentNote["Title"]
        NewNote.appendChild(NewNoteTitle)

        NewNote.onclick = function() {
            window.open(`note.html?NoteID=${i}`, '_self')
        }
        NewNote.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            Notes.splice(i, 1)
            SaveNotes()
            CreateNotesHomeScreen()
        })

        document.body.appendChild(NewNote)

        console.log(Notes)
    }
}
function DisplayNote(NoteID) {
    let Note = Notes[NoteID]

    document.querySelector(".title").value = Note.Title
    document.querySelector(".text").value = Note.Text
}
function UpdateNote(TextType, Text, NoteID) {
    let Note = Notes[NoteID]

    if (TextType == "title") {
        Note.Title = Text
    }
    else {
        Note.Text = Text
    }
    SaveNotes()
}

try {
    const CurrentURL = window.location.href;
    const NoteId = Number(CurrentURL.split("?")[1].split("=")[1]);
    
    console.log(NoteId);

    DisplayNote(NoteId)
    console.log(document.querySelector(".title"))
    document.querySelector(".title").addEventListener("input", function() {
        UpdateNote("title", document.querySelector(".title").value, NoteId)
    })
    document.querySelector(".text").addEventListener("input", function() {
        UpdateNote("text", document.querySelector(".text").value, NoteId)
    })

    document.querySelector(".back").onclick = function() {
        window.open("index.html", '_self')
    }
}
catch {
    CreateNotesHomeScreen()
    document.querySelector(".new-note").onclick = function() {
        Notes.push({Title: "", Text: ""})
        SaveNotes()
        CreateNotesHomeScreen()
    }
    document.querySelector(".back").onclick = function() {
        window.open("../../../index.html", '_self')
    }
}