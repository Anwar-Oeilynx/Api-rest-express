const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser les données JSON
app.use(express.json());

// Définir une route GET
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Exemple d'API pour obtenir une liste d'éléments
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  res.json(items);
});

// Exemple d'API pour ajouter un élément
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  // Logique pour ajouter l'élément à la base de données (ou en mémoire, ici)
  console.log('Nouvel élément:', newItem);
  res.status(201).json(newItem);
});

// Exemple d'API pour obtenir un élément spécifique par ID
app.get('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const item = { id: id, name: `Item ${id}` };
  res.json(item);
});

// Exemple d'API pour modifier un élément
app.put('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  // Logique pour mettre à jour l'élément dans la base de données
  console.log(`Élément ${id} mis à jour`, updatedItem);
  res.json(updatedItem);
});

// Exemple d'API pour supprimer un élément
app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params;
  // Logique pour supprimer l'élément de la base de données
  console.log(`Élément ${id} supprimé`);
  res.status(204).send();
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
