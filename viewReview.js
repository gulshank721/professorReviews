
window.onload = function() {
  fetch('http://localhost:3000/'+'reviews/')
    .then(response => response.json())
    .then(data => {
      // process the data here
      console.log(data);
      populateReviews(data);
    })
    .catch(error => {
      // handle errors here
      console.error(error);
    });
};


const search = document.getElementById("search") ;
console.log(search)
let reviews ;

search.addEventListener('click', async(e)=>{

    e.preventDefault();
    const searchQuery = document.getElementById("searchQuery").value ;
    console.log(searchQuery);
    console.log("button clicked");
    await fetch('http://localhost:3000/'+'reviews/search?q='+searchQuery, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ query: searchQuery })
      })
        .then(response => response.json())
       
        .then(data => {
            console.log("searched Data",data);
            reviews = data.results;
            console.log('reviews ',reviews);
            populateReviews(reviews);
        })
        
        .catch(error => console.error(error));
})

function populateReviews(reviews){

    const ul = document.getElementById("list");
    const ul_li = document.querySelectorAll("#list li")
   // clearing previously filled options
  //  var i, L = ul_li.length - 1;
  //  for(i = L; i >= 0; i--) {
  //      ul.remove(i);
  //  }
  ul.innerHTML = "";

    console.log("in ",reviews);
   reviews.map( (review) =>{
    //  console.log(review);
    // let lei = document.createElement("li");  
    let li = document.createElement("li");
    li.innerHTML = `
      <li class="list-group-item text-decoration-none d-flex justify-content-between align-items-start m-1">
        <div class="ms-2 me-auto">
          <h5 class="m-0">${review.professorName}</h5>
          <p class="m-0">Institute State: <span class="fw-light">${review.instituteState}</span></p>
          <p class="m-0">Institute City:<span class="fw-light"> ${review.instituteCity}</span></p>
          <p class="m-0">Institute:<span class="fw-light"> ${review.instituteName}</span></p>
        </div>
        <span class="badge bg-primary rounded-pill">${review.helpfullness}</span>
      </li>
    `;
    ul.appendChild(li);
   })
    
}
// console.log('reviews ',reviews);





