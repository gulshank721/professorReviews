fetch("colleges.json")
.then(response => response.json())
// .then( response => {console.log(response[0])})
.then(data => getData(data))
// .then(data => populateUniversity(data))



function getData(data){
    const list = data;

    populateState(list);

    const stateSelect = document.getElementById("stateSelect");
    var selectedState="";

    stateSelect.addEventListener("change", e => {
        selectedState = e.target.value;
        console.log(selectedState);
        populateUniversity(selectedState,list);
     })
     
}

function populateState(list){
    const stateList =[];
    
    //getting list of state from colleges.json file
    list.forEach(element => {
        if(!stateList.includes(element.state)){
            // console.log(stateList.includes(element));
            stateList.push(element.state); 
        }
         
    });
    console.log("states ",stateList);
    const stateSelect = document.getElementById("stateSelect");

    //creating option of select element for each state in stateList
    for (let i in stateList) {
        // console.log(stateList[i]);
        let option = document.createElement("option");
        option.setAttribute('value', stateList[i]);
      
        let optionText = document.createTextNode(stateList[i]);
        option.appendChild(optionText);
      
        stateSelect.appendChild(option);
      }
}

function populateUniversity(selectedState,list){

    const college = document.getElementById("institute");
        
   // clearing previously filled options
        var i, L = college.options.length - 1;
        for(i = L; i >= 0; i--) {
            college.remove(i);
        }

        // console.log(stateList[i]);
        const universityList = [];

        //accuring all the university of selectedState
        for(let i in list){
            if(list[i].state == selectedState && !universityList.includes(list[i].university))
            universityList.push(list[i].university);
        }
       console.log(universityList);
      
       //creating option in college DropDown list for universityList created
      for (let i in universityList) {

          let option = document.createElement("option");  
          option.setAttribute('value', universityList[i]);
        
          let optionText = document.createTextNode(universityList[i]);
          option.appendChild(optionText);
        
          college.appendChild(option);
      }

    console.log(college.options.length);
}

//
// const professorName = document.getElementById("professorName");
const instituteName = document.getElementById("institute");
const instituteState = document.getElementById("stateSelect");
const form1 = document.getElementById("form1");

form1.addEventListener('submit', function(e){
    e.preventDefault();

    // localStorage.setItem('professorName', professorName.value);
    localStorage.setItem('instituteName', institute.value);
    localStorage.setItem('instituteState', stateSelect.value);
    // console.log(localStorage, lastName);
   
    //on submit go to specified page
    window.location.href = 'rateProfessor.html';
})
