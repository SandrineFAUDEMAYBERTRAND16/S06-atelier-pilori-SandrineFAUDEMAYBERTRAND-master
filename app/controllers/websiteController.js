import websites from "../data/websites.js";
import Website from "../models/WebSite.js";

const websiteController = {
    showAllWebsitesPage: (req, res) => {                                         
        if (req.query.keyword) {                                               
            const lowerCasekeyword = req.query.keyword.toLowerCase();            
            const filteredWebsites = websites.filter(element => element.title.toLowerCase().includes(lowerCasekeyword)); 
            if (filteredWebsites.length > 0) {                                   
                res.render('list', {                                             
                    title: 'Recherche',                                         
                    h2: 'Résultats',      
                    websites: filteredWebsites,                                          
                });
            }
            else {                                                             
                res.render('error', {                                          
                    title: 'Recherche',
                    message: 'Aucun résultat',
                });
            }
        }
        else {                                                                   
            res.render('list', {                                                 
                title: 'Toutes les tomates',
                h2: 'Toutes les tomates',
                websites: websites,
            });
        }
    },

    showOneWebsitePage: (req, res, next) => {                                           
        const website = websites.find(element => element.slug === req.params.slug);     
        if (website) {                                                                  
            res.render('detail', { website, title: website.title });                  
        }
        else {                                                                        
            next();                                                                    
        }
    },

    showDenouncePage: (req, res) => {
        res.render('denounceForm');
    },

    handleDenounceForm: (req, res) => {                             
        try {                                                         
            const website = new Website(req.body);                    
            websites.push(website);                                   
            res.redirect('/tomates/' + website.slug);               
          }
          catch (error) {                                             
            res.render('denounceForm', {                             
              alert: error.message
            });
          }
    }
}

export default websiteController;
