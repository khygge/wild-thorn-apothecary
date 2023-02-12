document.getElementById("signout-btn").addEventListener("click", e => {
    e.preventDefault();
    fetch("/api/users/logout",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("Darnit")
        }
    })
});
