async function waiting(){
  var load = document.getElementById("table_planets");
  load.innerHTML = "<tr><td colspan=9><progress class='progress is-large is-info' max='100'>60%</progress></td></tr>";
}

async function getPlanets(){  
  const response = await fetch("https://www.swapi.tech/api/planets/");
  const data=await response.json();

  var temp=" ";
  for(i=0;i<data.results.length;i++) {
    const res = await fetch(data.results[i].url);
    const spec=await res.json();
    console.log(spec);

    temp += "<tr>";
    temp += "<td>" + spec.result.properties.name + "</td><td>" + spec.result.properties.terrain + "</td><td>" + spec.result.properties.climate + "</td><td>" + spec.result.properties.population + "</td><td>" + spec.result.properties.orbital_period + "</td><td>" + spec.result.properties.rotation_period + "</td><td>" + spec.result.properties.diameter + "</td><td>" + spec.result.properties.surface_water + "</td><td>" + spec.result.properties.gravity + "</td></tr>";
  }
  document.getElementById("table_planets").innerHTML = temp;
}

waiting();
getPlanets();