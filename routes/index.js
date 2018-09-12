const express = require('express');
const router  = express.Router();
const app = express();
const fetch   = require('node-fetch');



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.get('/films',  (req, res) => {
  fetch('https://swapi.co/api/films/')
  .then(results => results.json())
  .then(info => {
    // console.log(info)
    res.render('info', info); 
  });
});

router.get('/people', (req, res)=>{
  fetch('https://swapi.co/api/people/')
  .then(results => results.json()) 
    .then(info => {
    // console.log(info)
    res.render('people', info);
  });
});

router.get('/planets', (req, res)=>{
  fetch('https://swapi.co/api/planets/')
  .then(results => results.json())
  .then(info =>{
    res.render('planets', info)
  })
})  

router.get('species', (req, res)=>{
  fetch('https://swapi.co/api/species/')
  .then(results => results.json())
  .then(info =>{
    res.render('species', info)
  })
})

module.exports = router;