document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const toggle = document.getElementById('menu-icon');
  if (menu && toggle) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  }
});

document.getElementById('carForm').addEventListener('submit', function(e) {
  if (!validateForm()) {
    e.preventDefault();
  }
});


document.getElementById('carForm').addEventListener('submit', function(e) {
  if (!validateForm()) {
    e.preventDefault();
    
    return;
  }
  // Clear form fields
  this.reset();
  // Hide form and show message after submit
  setTimeout(function() {
    document.getElementById('carForm').style.display = 'none';
    document.getElementById('formMessage').style.display = 'block';
  }, 500); // Adjust delay if needed
});



function validateForm() {
  const priceMin = parseInt(document.getElementById('priceMin').value);
  const priceMax = parseInt(document.getElementById('priceMax').value);
  if (priceMin && priceMax && priceMin > priceMax) {
    alert("Minimum price cannot be greater than maximum price.");
     return false;
    }
  return true;
}