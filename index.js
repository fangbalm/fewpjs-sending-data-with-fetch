// Add your code here
function submitData(name, email){
    let formData = {
        name, 
        email
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((data) => { 
        document.body.innerHTML = object["id"]
        console.log(data) 
    })
    .catch((error) => {
        alert("Error"); 
        console.log(error.message); 
    })
}