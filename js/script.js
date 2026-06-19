const menuBtn = document.getElementById("menuBtn");
const lSide = document.getElementById("lSide");
const overlay = document.getElementById("overlay");

const profileBtn = document.getElementById("profileBtn");
const themeModal = document.getElementById("themeModal");
const themeBtn = document.getElementById("themeBtn");

const likeBtn = document.getElementById("likeBtn");
const likeText = document.getElementById("likeText");

const subscribeBtn = document.getElementById("subscribeBtn");
const shareBtn = document.getElementById("shareBtn");

const commentInput = document.getElementById("commentInput");
const commentBtn = document.getElementById("commentBtn");
const commentList = document.getElementById("commentList");

function toggleMenu() {
    lSide.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeMenu() {
    lSide.classList.remove("active");
    overlay.classList.remove("active");
}

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

profileBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    themeModal.classList.toggle("active");
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    themeBtn.innerHTML = darkMode
        ? '<i class="fa fa-sun"></i> Tema claro'
        : '<i class="fa fa-moon"></i> Tema escuro';
});

likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
    likeText.textContent = likeBtn.classList.contains("active") ? "Curtido" : "Curtir";
});

subscribeBtn.addEventListener("click", () => {
    subscribeBtn.classList.toggle("subscribed");
    subscribeBtn.textContent = subscribeBtn.classList.contains("subscribed") ? "Inscrito" : "Inscrever-se";
});

shareBtn.addEventListener("click", () => {
    alert("Link do vídeo copiado!");
});

function addComment() {
    const text = commentInput.value.trim();

    if (text === "") {
        alert("Digite um comentário antes de enviar.");
        return;
    }

    const comment = document.createElement("div");
    comment.classList.add("comment");

    comment.innerHTML = `
        <strong>Você</strong>
        <p>${text}</p>
    `;

    commentList.prepend(comment);
    commentInput.value = "";
    commentInput.focus();
}

commentBtn.addEventListener("click", addComment);

commentInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addComment();
    }
});

document.addEventListener("click", (event) => {
    const clickedProfile = profileBtn.contains(event.target);
    const clickedModal = themeModal.contains(event.target);

    if (!clickedProfile && !clickedModal) {
        themeModal.classList.remove("active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1025) {
        closeMenu();
    }
});
