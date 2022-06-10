//Récupérer le packet express situé dans le dossier node_modules
const express = require('express')
const morgan = require('morgan')
const { success } = require('./helper.js')
let pokemons = require('./mock-pokemon')

// Crée une instance de express avec une méthode du même nom
const app = express()

// On définit le port sur lequel nous allons démarrer notre API Rest par la suite
const port = 3000

/*Création d'un middleware
const logger = (req, res, next) => {
    console.log(` URL : ${req.url}`)
    next()
}
// Appel du middleware
app.use(logger)
*/
app.use(morgan('dev'))

// On définit notre premier point de terminaison
app.get('/', (req,res) => res.send('Hello, les ami(e)s !'))

// On récupère la liste des pokémons au format JSON, avec un message
app.get('/api/pokemons', (req,res) => {
    const message = 'Un pokémon a bien été trouvé '
    
    //res.send(`Vous avez demandé le pokemon ${pokemon.name}`)
    res.json(success(message, pokemons))
})

// Retourne le nombre total de pokémons que l'on a
app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokemon a bien été trouvé.'
    res.json(success(message, pokemon))   
})

app.listen(port, () => console.log(`Notre application Node est démarée sur : http://localhost:${port}`))
