const API_BASE_URL = "https://reqres.in/api/users";

function getPostsFetch() {
  console.log("Mengambil data pengguna");

  fetch(`${API_BASE_URL}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data pengguna:\n", data);
    })
    .catch((error) => {
      console.error("-> [Fetch Error]:", error.message);
    });
}

getPostsFetch();
