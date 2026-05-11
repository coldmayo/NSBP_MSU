document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("/send-email", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset(); // Clears the form after success
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Could not connect to the server.");
  }
});
