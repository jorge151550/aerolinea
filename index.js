const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8084


//servidor de cdontenido estatico
app.use(express.static('public'))

//directorios de vistas de hbs

//establece si las vistas existen
app.set('views', path.join(__dirname + '/public/views'))
//establece que se utilizaran archivos hbs para las vistas
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')


//configuaracion del directorio que guardara los archivos partialhbs
app.get('/', (req, res) => {
    res.render('disponibilidad')
})

app.get('/usuarios', (req, res) => {
    res.render('usuarios')
})

app.listen(puerto, () => {
    console.log(`escuchando por el puerto ${puerto}`)
})