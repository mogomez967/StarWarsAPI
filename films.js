async function getPeople(){
  const response = await fetch("https://www.swapi.tech/api/films/");
  console.log(response);
  const data=await response.json();
  console.log(data);

  var temp=" ";
  for(i=0;i<data.result.length;i++) {
    temp += "<tr>";
    temp += "<td>" + data.result[i].properties.title + "</td><td>" + data.result[i].properties.episode_id + "</td><td>" + data.result[i].properties.director + "</td><td>" + data.result[i].properties.producer + "</td><td>" + data.result[i].properties.release_date + "</td><td>" + data.result[i].properties.opening_crawl + "</td></tr>";
  }
  document.getElementById("table_films").innerHTML = temp;
}

getPeople();