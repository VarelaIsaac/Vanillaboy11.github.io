function toggleFooterVisibility() {
  clearTimeout(timeout);
  footer.classList.remove('hidden');  // Always show the footer if the user scrolls up

  timeout = setTimeout(function() {
    footer.classList.add('hidden');  // Hide the footer after 3 seconds
  }, 3000);
}

function handleScroll() {
  // Toggle 'active' class for the navbar
  nav.classList.toggle('active', window.scrollY > 0);

  // Check scroll direction and handle footer visibility
  if (window.scrollY > lastScrollY) {
    footer.classList.add('hidden');  // Hide footer when scrolling down
  } else {
    toggleFooterVisibility();  // Show footer when scrolling up
  }

  lastScrollY = window.scrollY;
}

window.addEventListener('scroll', handleScroll);

// Initial setup
footer.classList.remove('hidden');
timeout = setTimeout(function() {
  footer.classList.add('hidden');
}, 3000);
