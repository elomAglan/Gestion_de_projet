document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        // Récupération des utilisateurs stockés dans localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Vérifier si l'utilisateur existe déjà
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert("Cet e-mail est déjà utilisé. Veuillez vous connecter ou utiliser un autre e-mail.");
            return;
        }

        // Création d'un nouvel utilisateur
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        window.location.href = 'connexion.html'; // Rediriger vers la page de connexion
    });
});
