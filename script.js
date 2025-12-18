// Form validation
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        event.preventDefault(); // Prevent actual form submission in static version
        if (!form.checkValidity()) {
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        alert('This is a static demo. Form submission is disabled.');
      },
      false
    );
  });
})();

// Auto-dismiss alerts after 5 seconds
setTimeout(function () {
  var alerts = document.querySelectorAll('.alert');
  alerts.forEach(function (alert) {
    if (typeof bootstrap !== 'undefined' && bootstrap.Alert) {
      var bsAlert = new bootstrap.Alert(alert);
      setTimeout(function () {
        bsAlert.close();
      }, 5000);
    }
  });
}, 1000);


