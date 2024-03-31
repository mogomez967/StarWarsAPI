async function waiting(){
  var load = document.getElementById("table_vehicles");
  load.innerHTML = "<tr><td colspan=9><progress class='progress is-large is-info' max='100'>60%</progress></td></tr>";
}

async function getVehicles(){
  const response = await fetch("https://www.swapi.tech/api/vehicles/");
  const data=await response.json();

  var temp=" ";
  for(i=0;i<data.results.length;i++) {
    const res = await fetch(data.results[i].url);
    const ship=await res.json();
    console.log(ship);

    temp += "<tr>";
    temp += "<td>" + ship.result.properties.model + "</td><td>" + ship.result.properties.vehicle_class + "</td><td>" + ship.result.properties.manufacturer + "</td><td>" + ship.result.properties.cost_in_credits + "</td><td>" + ship.result.properties.length + "</td><td>" + ship.result.properties.max_atmosphering_speed + "</td><td>" + ship.result.properties.crew + "</td><td>" + ship.result.properties.passengers + "</td><td>" + ship.result.properties.cargo_capacity + "</td></tr>";
  }
  document.getElementById("table_vehicles").innerHTML = temp;
}

waiting();
getVehicles();