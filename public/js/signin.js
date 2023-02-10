document.querySelector("#signin-form").addEventListener("submit", e => {
    e.preventDefault();
    const loginObj = {
        username:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }
    console.log(loginObj)
    fetch("/api/users/signin",{
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("BINGUS")
        }
    })
});