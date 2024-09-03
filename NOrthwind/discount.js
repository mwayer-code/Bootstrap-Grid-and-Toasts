document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
        let toastInstance; // variable to store the toast instance

        if (e.target.classList.contains('discount1')) {
            e.preventDefault();

            document.getElementById('product1').innerHTML = e.target.dataset['product'];

            toastInstance = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast1'));
            toastInstance.show();
            
        }

        if (e.target.classList.contains('discount2')) {
        e.preventDefault();

        document.getElementById('product2').innerHTML = e.target.dataset['product'];

        toastInstance = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast2'));
        toastInstance.show();
        }

        if (e.target.classList.contains('discount3')) {
            e.preventDefault();

            document.getElementById('product3').innerHTML = e.target.dataset['product'];

            toastInstance = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast3'));
            toastInstance.show();
        }

        document.addEventListener('keydown', function(e){
            if (e.key === 'Escape' && toastInstance) {
                toastInstance.dispose();
            }
        });

      });
});