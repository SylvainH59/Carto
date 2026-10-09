fetch('js/menu.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('menu').innerHTML = html;
    })
    .catch(error => console.error('Erreur du menu :', error));
