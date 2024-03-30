async function getPeople(){
  const response = await fetch("https://www.swapi.tech/api/people/");
  console.log(response);
  const data=await response.json();
  console.log(data);

  var temp=" ";
  for(i=0;i<data.results.length;i++) {
    const res = await fetch(data.results[i].url);
    console.log(response);
    const person=await res.json();
    console.log(person);

    temp += "<tr>";
    temp += "<td>" + person.result.properties.name + "</td><td>" + person.result.properties.height + "</td><td>" + person.result.properties.mass + "</td><td>" + person.result.properties.hair_color + "</td><td>" + person.result.properties.skin_color + "</td><td>" + person.result.properties.eye_color + "</td><td>" + person.result.properties.birth_year + "</td><td>" + person.result.properties.gender + "</td></tr>";
  }
  document.getElementById("table_ppl").innerHTML = temp;
}

getPeople();