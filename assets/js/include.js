document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-include]").forEach(el => {
      const file = el.getAttribute("data-include");
      fetch(file)
        .then(res => {
          if (!res.ok) throw new Error("Fetch failed");
          return res.text();
        })
        .then(data => el.innerHTML = data)
        .catch(err => {
          el.innerHTML = `<div class="text-danger">Component failed to load: ${file}</div>`;
          console.error("Include error:", err);
        });
    });
  });
  