const getInput = () => {
  const searchedCharacter = $("#character-search").val().trim();
  return searchedCharacter.replace(/\s+/g, "").toLowerCase();
}

$("#search-btn").on("click", event => {
  event.preventDefault();
  $.get(`/api/characters/${getInput()}`, data => {
    if (data) {
      $("#stats").show();
      $("#name").text(data.name);
      $("#role").text(data.role);
      $("#age").text(data.age);
      $("#force-points").text(data.forcePoints);
    } else {
      $("#name").text("The force is not strong with this one. Your character was not found.");
      $("#stats").hide();
    }
  })
});

$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newCharacter = {
    name: $("#name").val().trim(),
    role: $("#role").val().trim(),
    age: $("#age").val().trim(),
    forcePoints: $("#force-points").val().trim()
  };

  if(newCharacter.name === "") return 

  $.post("/api/characters", newCharacter)
    .then(data=>{
      console.log(data)
      window.location.replace("/all.html")
    })

});