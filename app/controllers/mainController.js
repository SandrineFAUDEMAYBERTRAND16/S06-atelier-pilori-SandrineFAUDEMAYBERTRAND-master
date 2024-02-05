import websites from "../data/websites.js";

const mainController = {
    showHomePage: (req, res) => {                             
        const websitesSlicedList = websites.slice(0,3);         
        res.render('home', {websites: websitesSlicedList});    
    },

    showLegalsPage: (req, res) => {                             
        res.render("soon", {title: "Mentions Légales"});        
    },

    showPlanPage: (req, res) => {                            
        res.render("soon", {title: "Plan"});                    
    },

    showContactPage: (req, res) => {                            
        res.render("soon", {title: "Contact"});                 
    },

    showNotFoundPage: (req, res) => {                          
        res.render("error", {message: "La page demandée n'a pas pu être trouvée"});
    }
}

export default mainController; 