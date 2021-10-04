export default async () =>{
    let value;
    await fetch("https://gorest.co.in/public/v1/users")
    .then((resp) => resp.json())
        .then(function(data) {
            value = data;
        })
    .catch(function(error) {
        value = error
    });
    return value
}
