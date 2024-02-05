import User from "../models/User.js";
import bcrypt from 'bcrypt';

export const users = [];

const authController = {

    register: function (req, res) {
        res.render('register');
    },

    registerAction: function (req, res) {
        try {
            const formData = req.body;
            const user = new User(formData);
            users.push(user);
            res.redirect('/connexion');
        } catch (error) {                      
            res.render('register', { alert: error.message })
        }
      },

    login: function (req, res) {
        res.render('login');
    },

    loginAction: function (req, res) {
        const formData = req.body;
        const foundUser = users.find(user => user.email === formData.email);
        if (foundUser) {
            bcrypt.compare(formData.password, foundUser.password, function (err, result) {
                if (result) {
                    req.session.isLogged = true;
                    req.session.user = foundUser.email;
                    res.redirect('/');
                }
                else {
                    res.render('login', { alert: 'Mauvais couple identifiant/mot de passe' });
                }
            });
        } else {
            res.render('login', { alert: 'Mauvais couple identifiant/mot de passe' });
        }
    },

    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },

};

export default authController; 