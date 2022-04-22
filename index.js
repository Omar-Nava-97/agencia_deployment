import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar la Base de datos
db.authenticate().then( () => console.log('Base de datos conectada')).catch(error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes";
    return next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//agregar Router
app.use('/', router);

/** Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';


app.listen(port, host, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})

