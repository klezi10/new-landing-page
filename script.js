const emailCollector = document.getElementById('email-collector');
emailCollector.addEventListener('submit', function (event) {
  event.preventDefault();

  const myFormData = new FormData(event.target);
  const userName = myFormData.get('firstName');

  const userEmail = myFormData.get('emailAddress');

  const updatedHTML = `
  <h2>Congratulations, ${userName}!</h2>
        <p>
          You're going make some amazing BBQ! 
        </p>
        <p class="fine-print">
          The weekly tips will be sent to your email address ${userEmail}.
        </p>
  `;
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = updatedHTML;
});
