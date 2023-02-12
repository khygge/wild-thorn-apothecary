document.getElementById("signout-btn").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/api/users/logout", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      location.href = "/";
    } else {
      alert("Darnit");
    }
  });
});
