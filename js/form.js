// Anti Spam
(function(){
    const $formSpam = document.querySelector("#no-data");
    const $submitForm = document.querySelector("#submit");

    if($formSpam && $submitForm){
        $submitForm.addEventListener('submit', function(e){
            if($formSpam.value){
                e.preventDefault();
            }
        });
    }

})();

// Ajax 

(function(){
    window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above
        
        var form = document.getElementById("submit");
        var button = document.getElementById("my-form-button");
        var status = document.getElementById("my-form-status");
        const $loadForm = document.querySelector('.load-3');
    
        // Success and Error functions for after the form is submitted
        
        function success() {
          form.reset();
          status.innerHTML = "Obrigado! Em breve retornaremos o contato";
          status.classList.add('_success-color');
          $loadForm.classList.add('_d-none');
        }
    
        function error() {
          status.innerHTML = "Oops! E-mail não enviado";
          status.classList.add('_danger-color');
          button.classList.remove('_d-none');
          $loadForm.classList.add('_d-none');

        }
    
        // handle the form submission event
    
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          var data = new FormData(form);

            $loadForm.classList.remove('_d-none');
            button.classList.add('_d-none');

          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
    
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }
})();