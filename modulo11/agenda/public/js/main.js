
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('confirmDeleteModal')) {
    const script = document.createElement('script');
    script.src = '/js/delete-modal.js';
    document.body.appendChild(script);
  }
});
