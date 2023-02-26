function showNotes(){
    document.querySelector(".show-resources").style.display = "none";
    document.querySelector(".assignments").style.display = "none";
    document.querySelector(".pyq").style.display = "none";
    document.querySelector(".Doc-and-pdf").style.display = "none";
    document.querySelector(".Notes_section").style.display = "block";
}

function showAssignments(){
    document.querySelector(".show-resources").style.display = "none";

    document.querySelector(".assignments").style.display = "block";
    document.querySelector(".submitted_section").style.display = "none";

    document.querySelector(".pyq").style.display = "none";
    document.querySelector(".Doc-and-pdf").style.display = "none";
    document.querySelector(".Notes_section").style.display = "none";
}

function showPending(){
    document.querySelector(".pending_section").style.display = "grid";
    document.querySelector(".submitted_section").style.display = "none";
}

function showSubmitted(){
    document.querySelector(".pending_section").style.display = "none";
    document.querySelector(".submitted_section").style.display = "grid";
}

function showPYQ(){
    document.querySelector(".show-resources").style.display = "none";
    document.querySelector(".assignments").style.display = "none";
    document.querySelector(".pyq").style.display = "block";
    document.querySelector(".Doc-and-pdf").style.display = "none";
    document.querySelector(".Notes_section").style.display = "none";
}

function first_half(){
    document.querySelector(".first-half").style.display = "block";
    document.querySelector(".Second-half").style.display = "none";
} 
function second_half(){
    document.querySelector(".first-half").style.display = "none";
    document.querySelector(".Second-half").style.display = "block";
} 

function showDocs(){
    document.querySelector(".show-resources").style.display = "none";
    document.querySelector(".assignments").style.display = "none";
    document.querySelector(".pyq").style.display = "none";
    document.querySelector(".Doc-and-pdf").style.display = "block";
    document.querySelector(".Notes_section").style.display = "none";
}