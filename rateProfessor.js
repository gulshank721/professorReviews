// getiing form1 data
const instituteState = localStorage.getItem('instituteState');
const instituteName = localStorage.getItem('instituteName');
console.log(instituteState,instituteName);
document.getElementById('instituteName').value = instituteName;
document.getElementById('instituteState').value = instituteState;

//controlling final form submit
function getData(){
    const form2 = document.getElementById('form2');
    const form = new FormData(form2); // creates form object
    
    // jSON Object
    const data ={  
        // anonymity: form.get('anonymity'),
        // reviewerName: form.get('reviewerName'),
        // professorName: form.get('professorName'),
        // instituteName: form.get("instituteName"),
        // instituteState: form.get('instituteState'),
        // instituteCity: form.get('instituteCity'),
        // researchArea: form.get('researchArea'),
        // professorExpertise: form.get('professorExpertise'),
        // helpfullness: form.get('helpfullness'),
        // behaviour: form.get('behaviour'),
        // youTimeSpend: form.get('youTimeSpend'),
        // phdTimeToSpend: form.get('phdTimeToSpend'),
        // msTimeToSpend: form.get('msTimeToSpend'),
        // recommend: form.get('recommend')
    }
    // or we can do like this
    for (const [key, value] of form.entries()) {
        data[key] = value;
      }
      console.log(data);
    return data;
}

// console.log(data);
form2.addEventListener('submit', async(e)=>{
    
    e.preventDefault();
    const fd = getData();
    // const fd = new FormData(form2);
    console.log('form-data ', fd);
    // console.log('event To register', e);

   return await fetch('https://professor-review-server.onrender.com/' + 'reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        //    'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(fd),
     
       
      //   credentials: 'same-origin'
    })
    .then(response => {
      console.log(response);
        if (response.ok) {
            alert("review submitted successfully."+response.statusText);
            window.location.assign("submitReview.html");
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
           throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .catch(error => { alert('review could not be submitted: '+ error); })
  });

