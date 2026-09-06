const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const Boy = document.getElementById('boyName')
    const Girl = document.getElementById('girlName')
    const l1 = Boy.value.length;
    const l2 = Girl.value.length;

    const loveScore = Math.pow(l1 + l2, 2) % 100;

    document.querySelector('h2').textContent = `Result: ${loveScore}`;
    form.reset();
});