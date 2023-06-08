// Add your code here

// SubmitData function takes in 2 strings: 1 is the name the 2nd is the email.
function submitData(str1, str2) {
    //creates an object containing the necessary user data
    const userData = {
        name: str1,
        email: str2
  };

  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObject)
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML += `<p>Id: ${data.id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
