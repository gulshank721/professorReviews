const lastName = document.getElementById("lastName");
const college = document.getElementById("college");
const form1 = document.getElementById("form1");

form1.addEventListener('submit', function(e){
    e.preventDefault();

    localStorage.setItem('last-name', lastName.value);
    localStorage.setItem('college', college.value);
    // console.log(localStorage, lastName);

    window.location.href = 'rateProfessor.html';
})
