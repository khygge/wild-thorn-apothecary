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

document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let searchedPlant = document.getElementById("searchInput").value;
  searchedPlant = searchedPlant.toLowerCase();
  fetch("/api/plants", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (searchedPlant == data[i].plant_name.toLowerCase()) {
          fetch(`/api/users/addplant/${data[i].id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json().then((data) => location.reload()));
        } else {
          console.log(
            `searchedPlant=${searchedPlant} but other plant = ${data[i].plant_name}`
          );
        }
      }
    });
});
