/* =========================
   SEARCH NOTES
========================= */

function searchNotes() {

    let search =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let notes =
        document.querySelectorAll(".cloud-note");

    notes.forEach(note => {

        let title =
            note.getAttribute("data-title")
            .toLowerCase();

        let subject =
            note.getAttribute("data-subject")
            .toLowerCase();

        if (
            title.includes(search) ||
            subject.includes(search)
        ) {

            note.style.display = "block";

        } else {

            note.style.display = "none";

        }

    });
}


/* =========================
   SUBJECT FILTER
========================= */

function filterSubject(subject) {

    let notes =
        document.querySelectorAll(".cloud-note");

    notes.forEach(note => {

        let noteSubject =
            note.getAttribute("data-subject");

        if (noteSubject === subject) {

            note.style.display = "block";

        } else {

            note.style.display = "none";

        }

    });

    document.getElementById("notesSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   SHOW ALL
========================= */

function showAllNotes() {

    let notes =
        document.querySelectorAll(".cloud-note");

    notes.forEach(note => {

        note.style.display = "block";

    });

}


/* =========================
   SCROLL TO NOTES
========================= */

function scrollToNotes() {

    document.getElementById("notesSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   FAVORITE
========================= */

let favoriteCount = 0;

function toggleFavorite(button) {

    button.classList.toggle("liked");

    if (
        button.classList.contains("liked")
    ) {

        button.innerHTML = "♥";

        favoriteCount++;

    } else {

        button.innerHTML = "♡";

        favoriteCount--;

    }

}


/* =========================
   READ NOTE
========================= */

function readNote(noteName) {

    alert(
        "📖 Opening Note\n\n" +
        noteName +
        "\n\n" +
        "This note contains study materials, " +
        "important concepts and revision points."
    );

}


/* =========================
   NOTIFICATION
========================= */

function showNotification() {

    alert(
        "🔔 NoteCloud Notifications\n\n" +

        "🤖 New AI notes uploaded\n\n" +

        "📊 Data Science notes are trending\n\n" +

        "⭐ Your notes received a new rating\n\n" +

        "☁️ 5 new notes were shared today"
    );

}


/* =========================
   DARK / LIGHT MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    let button =
        document.querySelector(
            ".header-actions button:nth-child(2)"
        );

    if (
        document.body.classList.contains("light-mode")
    ) {

        button.innerHTML = "☀️";

    } else {

        button.innerHTML = "🌙";

    }

}


/* =========================
   UPLOAD NOTE
========================= */

function uploadNote() {

    let title =
        document.getElementById("noteTitle")
        .value
        .trim();

    let subject =
        document.getElementById("noteSubject")
        .value;

    let file =
        document.getElementById("noteFile")
        .files[0];

    let message =
        document.getElementById("uploadMessage");


    if (title === "") {

        message.style.color = "#ff668b";

        message.innerText =
            "⚠️ Please enter a note title.";

        return;
    }


    if (subject === "") {

        message.style.color = "#ff668b";

        message.innerText =
            "⚠️ Please select a subject.";

        return;
    }


    if (!file) {

        message.style.color = "#ff668b";

        message.innerText =
            "⚠️ Please select a file.";

        return;
    }


    message.style.color = "#4dffbd";

    message.innerText =
        "☁️ " +
        title +
        " uploaded successfully!";


    document.getElementById("noteTitle")
        .value = "";

    document.getElementById("noteSubject")
        .value = "";

    document.getElementById("noteFile")
        .value = "";

}


/* =========================
   BUTTON TOUCH EFFECT
========================= */

document.addEventListener(
    "click",
    function(event) {

        let button =
            event.target.closest("button");

        if (!button) return;

        button.style.transform =
            "scale(0.94)";

        setTimeout(function() {

            button.style.transform = "";

        }, 120);

    }
);