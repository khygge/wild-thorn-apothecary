// Route to sign up on button click
document.querySelector("#sign-up-form").addEventListener("submit",e => {
    e.preventDefault();
    const signupObj = {
        user_email:document.querySelector("#signUpEmail").value,
        username:document.querySelector("#signUpUsername").value,
        password:document.querySelector("#signUpPassword").value
    }
    console.log(signupObj)
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(signupObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/userplants"
        } else {
            console.log(err)
        }
    })
});
