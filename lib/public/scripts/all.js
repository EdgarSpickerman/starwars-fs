$(document).ready(() => {
  $.get("/api/characters",data=>{
    Object.keys(data).map(key=>data[key])
      .forEach((char,i)=>{
        const wellSection = $("<div>").addClass("well");
        wellSection.attr("id", "character-well-" + i);
        $("#well-section").append(wellSection);
        $("#character-well-" + i)
          .append(
            `<h2> ${char.name} </h2>
            <h3>Role: ${char.role}</h4>
            <h3>Age: ${char.age} </h4>
            <h3>Force Points: ${char.forcePoints} </h4>`)
      })

  })
})