fetch('js/menu.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Impossible de charger le menu');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('menu').innerHTML = html;
    })
    .catch(error => console.error('Erreur du menu :', error));
