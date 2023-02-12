const searchedTitle = document.querySelector("#plantTitle");
const searchedDescription = document.querySelector("#plantDescription");
const searchedHealthList = document.querySelector("#healthList");
const searchedImage = document.querySelector("#plantImg");

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
          fetch(`/api/plants/${data[i].id}`)
            .then((res) => res.json())
            .then((matchingPlant) => {
              appendSearchedPlant(matchingPlant);
            });
        } else {
          console.log(
            `searchedPlant=${searchedPlant} but other plant = ${data[i].plant_name}`
          );
        }
      }
    });
});

// ! Use this fetch to add a plant to a user
// fetch(`/api/users/addplant/${data[i].id}`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// }).then((res) => res.json().then((data) => location.reload()));

document.querySelector("#emailMeBtn").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/mail", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json().then((data) => location.reload()));
});

const appendSearchedPlant = async (plantObj) => {
  console.log(plantObj);
  let title = plantObj.plant_name;
  let imgSrc = plantObj.plant_name.toLowerCase();
  let description = `Preferred Climate: ${plantObj.climate}, Type: ${plantObj.type}`;
  let healthArr = plantObj.Health;
  searchedTitle.textContent = title;
  searchedDescription.textContent = description;
  searchedImage.setAttribute("src", `/images/${imgSrc}.jpg`);

  console.log(title + " title");
  console.log(description + " desc");
  console.log(healthArr);
};
