async function demo() {
  try {
    console.log("Fetching data...");
    const res = await fetch("https://randomuser.me/api/");
    console.log("Response object received ✅");
    const data = await res.json();
    console.log("Final Data:", data.results[0].name);
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
  }
}
demo();
