import { users } from '../controllers/authController.js';

function addUserData(req, res, next) {
    if (req.session.isLogged) {
        res.locals.isLogged = true;
        res.locals.user = users.find(element => element.email === req.session.user); 
    }
      else {
            res.locals.isLogged = false;
            res.locals.user = null;
        }
        next();
    }
export default addUserData;