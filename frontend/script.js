document.getElementById('btn').addEventListener('click', () => {
    fetch('../backend/api.php')
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch(err => console.error(err));
});