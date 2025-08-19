// Placeholder for shared JS. You can add navigation, charts, dynamic UI, etc.
document.querySelectorAll('.profile-dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('open');
    document.addEventListener('click', function handler() {
      dropdown.classList.remove('open');
      document.removeEventListener('click', handler);
    });
  });
});