var people;

fetch("https://www.swapi.tech/api/planets/1/")
.then(res => res.json())
.then(data => {people = data})
.catch(err => console.error(err))

console.log(people)