document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('navbtn');
  const menu = document.querySelector('.nav-ul');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('active');

      if (menu.classList.contains('active')) {
        btn.innerHTML = "✕"; 
      } else {
        btn.innerHTML = "☰"; 
      }
    });
  }

  const form = document.getElementById("my-form");
  const status = document.getElementById("my-form-status");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      
      try {
        if (status) {
          status.innerHTML = "Sending...";
          status.style.color = "#e0e0e0";
        }

        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          if (status) {
            status.innerHTML = "Thanks for your submission!";
            status.style.color = "#00ff73";
          }
          form.reset();
        } else {
          const jsonData = await response.json();
          if (status) {
            status.innerHTML = (jsonData.errors && jsonData.errors.map(error => error.message).join(", ")) || "Oops! There was a problem submitting your form";
            status.style.color = "#ff4d4d";
          }
        }
      } catch (error) {
        if (status) {
          status.innerHTML = "Oops! There was a problem submitting your form";
          status.style.color = "#ff4d4d";
        }
      }
    });
  }
});
            var form = document.getElementById("my-form");
    
                async function handleSubmit(event) {
                event.preventDefault();
                 var status = document.getElementById("my-form-status");
                var data = new FormData(event.target);
                fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                    status.innerHTML = "Thanks for your submission!";
                    form.reset()
                    } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                }).catch(error => {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                });
                }
                form.addEventListener("submit", handleSubmit)
                
                const btn = document.getElementById('navbtn');
                const menu = document.querySelector('nav ul');

                btn.addEventListener('click', () => {
                menu.classList.toggle('active');
                
                if (menu.classList.contains('active')) {
                    btn.innerHTML = "✕"; 
                } else {
                    btn.innerHTML = "☰"; 
                }
                });