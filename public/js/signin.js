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
           location.href="/userplants"
        } else {
            alert("Incorrect username or password.")
        }
    })
});

// function checkIfEmail(fun) {
//     // Regular expression to check if string is email
//     // unsure how this works. dont ask me. i googled email verification and this popped up. need to test if it works.

//     const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  
//     return regexExp.test(fun);
//   }
// const emailusername = document.querySelector("#signInEmailUsername").value;
// // TODO: need to test once front end is up
// document.querySelector("#signInForm").addEventListener("submit",e=>{
//     e.preventDefault();
//     const signinObj = {
//         password:document.querySelector("#signInPassword").value
//     };
//     let verify = checkIfEmail(emailusername)
//     if (verify){
//         Object.assign(signinObj, { email: document.querySelector("#signInEmailUsername").value });
//     } else {
//         Object.assign(signinObj, { username: document.querySelector("#signInEmailUsername").value });
//     }
    

    
//     console.log(signinObj)

//     // TODO: add route to bring user to their garden
//     fetch("",{
//         method:"POST",
//         body:JSON.stringify(signinObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         // TODO: where to redirect?
//         if(res.ok){
//            location.href=""
//         } else {
//             console.log(err)
//         }
//     })
// })
