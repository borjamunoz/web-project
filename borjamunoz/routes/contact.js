var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('contact', { title: 'Raging Flame Laboratory - Contact', page: 'contact' });
});

module.exports = router;