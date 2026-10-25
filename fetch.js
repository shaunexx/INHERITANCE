// fetch
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((data) => {
        const { name, username, email, address: { street, suite, city, zipcode, geo:{ lat, lng } } } = data;

        console.log("Name:", name);
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Address:", street );
        console.log("Suite:", suite );
        console.log("City:", city );
        console.log("zipcode:", zipcode );
        console.log("Lat:", lat);
        console.log("Lng:", lng);
    })
    .catch((error) => {
        console.log(error);
    });
