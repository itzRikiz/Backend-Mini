document
  .getElementById("shortenButton")
  .addEventListener("click", async function () {
    const originalUrl = document.getElementById("urlInput").value;
    if (!originalUrl) {
      alert("Please enter a valid URL");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: originalUrl }),
      });

      const data = await response.json();
      if (data.shortCode) {
        const shortUrl = `http://localhost:5000/${data.shortCode}`;
        document.getElementById("shortUrl").href = shortUrl;
        document.getElementById("shortUrl").innerText = shortUrl;
      } else {
        alert("Error generating short URL");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  });
