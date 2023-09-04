let email = document.getElementById('email');
let error = document.getElementById('email-error');
let form = document.getElementById('form');
let app = document.getElementById('app');
let reload = document.getElementById('reload');

form.addEventListener('submit', (event) => {
    if (!email.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
        error.innerText = 'Valid email required';
        email.classList.add('input-error');
        event.preventDefault();
    } else {
        app.innerHTML = `
            <div class="message-card">
                <div class="card-items">
                    <div class="card-header">
                    <img src="./assets/images/icon-success.svg" alt="">
                    <h1>Thanks for subscribing!</h1>
                </div>
                <div class="card-body">
                    <p>A confirmation email has been sent to <strong>${email.value}.</strong>
                        Please open it and click the button inside to confirm your subscription.</p>
                </div>
                </div>
                <div class="card-footer">
                    <button id="button" onclick="Dismiss()">Dismiss message</button>
                </div>
            </div>
            </div>
`;
    }
})

function Dismiss() {
    window.location.reload();
}
