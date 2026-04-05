function buscarUsuarios() {
    fetch("http://localhost:8080/api/users")
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById("lista");
            lista.innerHTML = "";

            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.username + " - " + user.email;
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

function abrirFormulario() {
    const form = document.getElementById("formPost");
    form.style.display = "block";
}


function createPost() {
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;
    const user_id = document.getElementById("user_id").value;

    const novoPost = {
        title: title,
        message: message,
        user: {
            id: Number(user_id)
        }
    };

    fetch("http://localhost:8080/post/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoPost)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao criar post");
            }
            return response.json();
        })
        .then(data => {
            console.log("Post criado:", data);
            buscarPosts();
            fecharModal();

            document.getElementById("title").value = "";
            document.getElementById("message").value = "";
            document.getElementById("user_id").value = "";
            document.getElementById("formPost").style.display = "none";
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

function buscarPosts() {
    fetch("http://localhost:8080/post/all")
        .then(response => response.json())
        .then(data => {
            const feed = document.getElementById("feed");
            feed.innerHTML = "";

            data.forEach(post => {
                const div = document.createElement("div");
                div.classList.add("post");

                div.innerHTML = `
                    <div class="post-title">${post.title}</div>
                    <div class="post-message">${post.message}</div>
                `;

                feed.appendChild(div);
            });
        })
        .catch(error => console.error(error));
}

window.onload = function () {
    buscarPosts();
};

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}