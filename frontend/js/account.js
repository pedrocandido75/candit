const user = localStorage.getItem("user");

if (!user) {
    window.location.href = "login.html";
}
const userObj = JSON.parse(user);
const userId = userObj.id;
const userName = userObj.username;
const userEmail = userObj.email;
console.log(userId);
console.log(userName);
console.log(userEmail);


function carregarPerfil() {
    document.getElementById("username").value = userName;
    document.getElementById("email").value = userEmail;
}

function carregarMeusPosts() {
    fetch("http://localhost:8080/post/all")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("meusPosts");
            container.innerHTML = "";

            const meusPosts = data.filter(post =>
                post.user && post.user.id === userObj.id
            );

            meusPosts.reverse().forEach(post => {
                const div = document.createElement("div");
                div.classList.add("post");

                div.innerHTML = `
                    <div><strong>${post.title}</strong></div>
                    <div>${post.message ?? ""}</div>
                    <div>❤️ ${post.likes ?? 0}</div>
                `;

                container.appendChild(div);
            });
        })
        .catch(err => console.error(err));
}

function atualizarPerfil() {
    const updatedUser = {
        id: user.id,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch(`http://localhost:8080/users/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("user", JSON.stringify(data));
            alert("Perfil atualizado!");
        });
}

// 🔥 voltar
function voltar() {
    window.location.href = "index.html";
}

// INIT
window.onload = function () {
    carregarPerfil();
    carregarMeusPosts();
};