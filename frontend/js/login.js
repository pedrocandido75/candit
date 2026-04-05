function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Email ou senha inválidos");
            }
            return response.json();
        })
        .then(user => {
            console.log("Logado:", user);

            // salva usuário no navegador
            localStorage.setItem("user", JSON.stringify(user));

            // redireciona para index
            window.location.href = "index.html";
        })
        .catch(error => {
            alert(error.message);
        });
}