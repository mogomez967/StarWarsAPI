let request = "https://www.swapi.tech/api/people/1"

fetch(request)
  .then((response) => {
    return response.json();
  })
  .then( (data) => {
    let p = document.getElementById("Name");
    console.log(data);
    p.innerHTML = JSON.stringify(data.result.properties.name);
  })

// TODO: Make tables and display API data for each category -- people, planets, etc.