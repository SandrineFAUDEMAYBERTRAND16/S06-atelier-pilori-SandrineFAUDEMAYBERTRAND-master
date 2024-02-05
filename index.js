//console.log("bonjour")
import express from "express";
import * as dotenv from 'dotenv';
import session from "express-session";


import router from './app/router.js';
import mainController from './app/controllers/mainController.js';
import addUserData from './app/middleware/addUserData.js';  

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}));

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./S06-inte-pilori-sandrineFAUDEMAYBERTRAND/public'));

app.use(addUserData); 

app.use(router);

app.use(mainController.showNotFoundPage);  

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});