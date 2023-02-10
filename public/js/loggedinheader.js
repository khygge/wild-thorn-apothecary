document.querySelector("#mygardenbtn").addEventListener("submit",e=>{
    e.preventDefault();
    // TODO: Add Garden page route
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
document.querySelector("#logoutbtn").addEventListener("submit",e=>{
    e.preventDefault();
    // TODO: Add Sign In or home page route
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