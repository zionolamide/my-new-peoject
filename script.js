function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
}

// Show home tab by default
document.addEventListener('DOMContentLoaded', function() {
  showTab('home');
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  showTab('thankyou');
});

// Price Calculator Form Submission
document.getElementById('calculatorForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const area = document.getElementById('area').value;
  const material = document.getElementById('material').value;

  let pricePerSqm = 0;

  if (material === 'tile') pricePerSqm = 500;
  else if (material === 'metal') pricePerSqm = 400;
  else if (material === 'shingles') pricePerSqm = 300;

  const totalPrice = area * pricePerSqm;

  document.getElementById('priceResult').innerHTML = `<h2>Estimated Price: SEK ${totalPrice}</h2>`;
  
  showTab('calculator');
});