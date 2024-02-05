import express from 'express';
import mainController from './controllers/mainController.js';
import websiteController from './controllers/websiteController.js';
import authController from './controllers/authController.js';
import isLogged from './middleware/isLogged.js';
import userController from './controllers/userController.js';

const router = express.Router();

router.get('/', mainController.showHomePage);
router.get('/mentions-legales', mainController.showLegalsPage);
router.get('/plan', mainController.showPlanPage);
router.get('/contact', mainController.showContactPage);

router.get('/tomates', websiteController.showAllWebsitesPage);
router.get('/tomates/:slug', websiteController.showOneWebsitePage );

router.get('/tomates/denoncer', websiteController.showDenouncePage);
router.post('/tomates/denoncer', websiteController.handleDenounceForm);

router.get('/connexion', authController.login);
router.post('/connexion', authController.loginAction);
router.get('/inscription', authController.register);
router.post('/inscription', authController.registerAction);
router.get('/deconnexion', isLogged, authController.logout);

router.get('/profil', isLogged, userController.profil);


export default router;    