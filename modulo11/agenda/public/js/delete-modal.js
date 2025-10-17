document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("confirmDeleteModal");
  const contactNameSpan = document.getElementById("contactName");
  const deleteForm = document.getElementById("deleteContactForm");

  if (!modal) return;

  modal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const contactId = button.getAttribute("data-contato-id");
    const contactName = button.getAttribute("data-contato-name");

    contactNameSpan.textContent = contactName;
    deleteForm.setAttribute("action", `/contato/delete/${contactId}`);
  });
});
