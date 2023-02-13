document.querySelector("#signupbtn").addEventListener("submit",e=>{
    e.preventDefault();
    // TODO: Add Sign up page route
    fetch("",{
        method:"GET"
    }).then(res=>{
        // TODO: where to redirect?
        if(res.ok){
           location.href=""
        } else {
            console.log(err)
        }
    })
})
document.querySelector("#signinbtn").addEventListener("submit",e=>{
    e.preventDefault();
    // TODO: Add Sign In page route
    fetch("",{
        method:"GET"
    }).then(res=>{
        // TODO: where to redirect?
        if(res.ok){
           location.href=""
        } else {
            console.log(err)
        }
    })
})