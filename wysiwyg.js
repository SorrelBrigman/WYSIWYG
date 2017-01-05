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
    peopleHTML += `<h2 class="name">Name: ${famousPeople.people[i].name}</h2>`;
    peopleHTML += `<p class="bio">Bio: ${famousPeople.people[i].bio}</p>`;
    peopleHTML += `<img class="image" src=${famousPeople.people[i].image} alt="image of ${famousPeople.people[i].name}" width="200" height="200">`;
  }
  peopleHTML += `</div>`;
  $(".container").html(peopleHTML);
  $(".name").click(dottedBorder);
  $(".bio").click(dottedBorder);
  $(".image").click(dottedBorder);
}

//When you click on a person's element, a dotted border should go around it.

function dottedBorder(evt) {
  console.log("I've been clicked", evt.target)
  //if any instances of it occur already, remove it
  $(".dottedBorderSelector").removeClass("dottedBorderSelector");
  // add the dotted border to the most recently clicked element
  $(evt.target).addClass("dottedBorderSelector");
}
