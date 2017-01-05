//Global Var

var famousPeople;

var promise1 = new Promise(function(resolve, reject) {
    $.ajax({
      url : "famousPeople.json"
    })
    .done(function(data, textStatus, XHR){
      resolve(data);
      console.log(data);
    })
  });

promise1.then(function(val){
  famousPeople = val;
  fillPage();
});

function fillPage() {
  var peopleHTML = "";
  for(var i = 0; i < famousPeople.people.length; i++) {
    if(i%2 === 0) {
      peopleHTML += `<div class="cards even">`;
    } else {
      peopleHTML += `<div class="cards odd">`;
    }
    peopleHTML += `<h2>Name: ${famousPeople.people[i].name}</h2>`;
    peopleHTML += `<p class="bio">Bio: ${famousPeople.people[i].bio}</p>`;
    peopleHTML += `<img src=${famousPeople.people[i].image} alt="image of ${famousPeople.people[i].name}" width="200" height="200">`;
  }
  peopleHTML += `</div>`;
  $(".container").html(peopleHTML);
}
