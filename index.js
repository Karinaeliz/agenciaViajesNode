import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));


// Definir puerto
const PORT = process.env.PORT || 3000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});


// Habilitar express.json
app.use(express.urlencoded({ extended: true }));


// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);


app.listen(PORT, () => {
    console.log(`El Servidor esta funcionando en el puerto ${PORT}`);
});
