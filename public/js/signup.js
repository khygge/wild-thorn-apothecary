document.querySelector("#signUpForm").addEventListener("submit",e=>{
    e.preventDefault();
    const signupObj = {
        user_email:document.querySelector("#signUpEmail").value,
        username:document.querySelector("#signUpUsername").value,
        password:document.querySelector("#signUpPassword").value
    }
    console.log(signupObj)

    // TODO: add route for creating a new user
    fetch("",{
        method:"POST",
        body:JSON.stringify(signupObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        // TODO: where to redirect?
        if(res.ok){
           location.href=""
        } else {
            console.log(err)
        }
    })
})
