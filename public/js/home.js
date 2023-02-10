const signinBtn = document.getElementById("signin-btn");

const signIn = () => {
    location.href = "/signin"
}

signinBtn.addEventListener("click", signIn)