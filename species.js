async function getSpecies(){
  const response = await fetch("https://www.swapi.tech/api/species/");
  const data=await response.json();

  var temp=" ";
  for(i=0;i<data.results.length;i++) {
    const res = await fetch(data.results[i].url);
    const spec=await res.json();
    console.log(spec);

    temp += "<tr>";
    temp += "<td>" + spec.result.properties.name + "</td><td>" + spec.result.properties.classification + "</td><td>" + spec.result.properties.designation + "</td><td>" + spec.result.properties.average_height + "</td><td>" + spec.result.properties.average_lifespan + "</td><td>" + spec.result.properties.hair_colors + "</td><td>" + spec.result.properties.skin_colors + "</td><td>" + spec.result.properties.eye_colors + "</td><td>" + spec.result.properties.language + "</td></tr>";
  }
  document.getElementById("table_species").innerHTML = temp;
}

getSpecies();