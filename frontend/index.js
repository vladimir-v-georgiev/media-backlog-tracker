document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const responseBox = document.getElementById('responseBox');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://127.0.0.1:3000/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            // Display the data inside the page
            responseBox.innerHTML = `
        <h3>Server Response:</h3>
        <p><strong>Message:</strong> ${result.message}</p>
        <p><strong>Title:</strong> ${result.data.title}</p>
        <p><strong>Length:</strong> ${result.data.length}</p>
        <p><strong>Genre:</strong> ${result.data.genre}</p>
      `;
        } catch (err) {
            responseBox.textContent = 'Error sending data: ' + err.message;
        }
    });
});