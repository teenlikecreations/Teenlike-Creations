function buyTemplate(templateName) {
  alert("Thank you for purchasing: " + templateName);
  // Send to server (example)
  fetch('/buy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ template: templateName })
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message!");
});
