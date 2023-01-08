// peticion = fetch("https://reqres.in/api/users?page=2");

// peticion.then(res => (res.text())).then(res => console.log(res));
//peticion.then(res => (res.text())).then(res => console.log((JSON.parse (res))));


// console.log(peticion)

// fetch("https://reqres.in/api/users?page=2");

// .then(res => res.text())
// .then(res => console.log(res));


// peticion post

peticion = fetch("https://reqres.in/api/users", {

method: "POST",
body : JSON.stringify({
    "nombre": "lucas",
    "apellido" : "eduard",
    headers:{  "content-type " : "application/jason" }
}),


})

peticion.then(res => (res.json())).then(res => console.log((res)));


console.log(peticion)