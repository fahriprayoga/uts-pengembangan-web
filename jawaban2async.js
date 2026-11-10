const API_BASE_URL = "https://reqres.in/api/users";

async function getPostsFetch() {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Mengambil data pengguna :");
    console.log(data);
  } catch (error) {
    console.error("[Fetch Error]:", error.message);
  }
}

getPostsFetch();
