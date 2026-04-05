function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const newUser = {
        email: email,
        password: password,
        username: username
    };

    fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao cadastrar");
            }
            return response.json();
        })
        .then(data => {
            alert("Usuário criado com sucesso!");

            // redireciona pro login
            window.location.href = "login.html";
        })
        .catch(error => {
            alert(error.message);
        });
}