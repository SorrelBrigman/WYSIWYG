//Global Var

var famousPeople;

//event listener to input field
  $("input").keyup(updateText);

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
  //bind event listeners
  $(".container").html(peopleHTML);
  $(".name").click(dottedBorder);
  $(".bio").click(dottedBorder);
  $(".bio").click(bioClick);
  $(".image").click(dottedBorder);

}

//When you click on a person's element, a dotted border should go around it.

function dottedBorder(evt) {
  console.log("I've been clicked", evt.target)
  //if any instances of it occur already, remove it
  $(".dottedBorderSelector").removeClass("dottedBorderSelector");
  // add the dotted border to the most recently clicked element
  $(evt.target).addClass("dottedBorderSelector");
};


function bioClick() {
  //clears any text in the input text field
  $("input").val(" ");
    //focuses on input
  $("input").focus();
}

///Look at code below, make sure will work for THIS exercise
//create and bind function for putting focus on the text input when bio click




function updateText(e) {
  console.log("You're typing in the field");

  //selects the inner text of the selected card's description element
  //and sets it equal to the value of the input field, changing on every keyup
  if(e.keyCode !== 13) {
    var fieldInput = $("input").val();
    $(".bio.dottedBorderSelector").text(fieldInput);

    //When user hits enter, it posts the changes and unselect the card
  } else if (e.keyCode === 13) {
    $("input").val("");
    $("input").blur();
  }
}
