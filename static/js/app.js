const username = "admin";

function renderPost(post) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);
}

async function submitPost() {
    const message = document.getElementById("postInput").value;
    try {
        const response = await fetch("/api/posts",{
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, message
            }),
        });
    } catch (error) {
        console.error("Post failed 😭", error)
    }
    console.log("Would post:", message);
    alert("Tweet submitted (not really yet)");
}

window.onload = () => {
    const hardcodedPost = {
        username: "admin",
        message: "Welcome to Banterbird! This post is hardcoded.",
    };
    renderPost(hardcodedPost);
};