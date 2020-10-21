#!/usr/bin/node
/* define routes */
const { Router } = require('express');
const router = Router();

/* init */
const { getinit } = require('../controllers/init')
/*users */
const { getusers, createuser, getuserbyid, updateuser, deleteuser, deleteallusers } = require('../controllers/users');
/*admins */
const { getadmins, createadmins, getadminbyid, updateadmin, deleteadmin, deletealladmins } = require('../controllers/admins');
/*company */
const { getcompany, createcompany, getcompanybyid, updatecompany, deletecompany, deleteallcompany } = require('../controllers/company');
/*webpages */
const { getwebpages, getwebpagebyid, createwebpages, updatewebpage, deletewebpage, deleteallwebpages } = require('../controllers/webpages');
/*jobpost */
const { getjobpost, getjobpostbyid, createjobpost, updatejobpost, deletejobpost, deletealljobpost } = require('../controllers/jobpost');
/* scrapp */
const { storeFileIntoDB } = require('../controllers/storeFileIntoDB');
/* search by date */
const { createvoteup, createvotedown, mostvotes, downvotes } = require('../controllers/votes');

/* init */
router.get('/', getinit);

/*users */
router.get('/users', getusers);
router.get('/users/:id', getuserbyid);
router.post('/users', createuser);
router.put('/users/:id', updateuser);
router.delete('/users/:id', deleteuser);
router.delete('/users', deleteallusers);

/*admins */
router.get('/admins', getadmins);
router.get('/admins/:id', getadminbyid);
router.post('/admins', createadmins);
router.put('/admins/:id', updateadmin);
router.delete('/admins/:id', deleteadmin);
router.delete('/admins', deletealladmins);

/*company */
router.get('/company', getcompany);
router.get('/company/:id', getcompanybyid);
router.post('/company', createcompany);
router.put('/company/:id', updatecompany);
router.delete('/company/:id', deletecompany);
router.delete('/company', deleteallcompany);

/*webpages */
router.get('/webpages', getwebpages);
router.get('/webpages/:id', getwebpagebyid);
router.post('/webpages', createwebpages);
router.put('/webpages/:id', updatewebpage);
router.delete('/webpages/:id', deletewebpage);
router.delete('/webpages', deleteallwebpages);

/*jobpost */
router.get('/jobpost', getjobpost);
router.get('/jobpost/:id', getjobpostbyid);
router.post('/jobpost', createjobpost);
router.put('/jobpost/:id', updatejobpost);
router.delete('/jobpost/:id', deletejobpost);
router.delete('/jobpost', deletealljobpost);

/* scrapp */
router.get('/scrapp', storeFileIntoDB);

/* votes*/
router.put('/voteup/:id', createvoteup);
router.put('/votedown/:id', createvotedown);
router.get('/mostvotes', mostvotes);
router.get('/downvotes', downvotes);

module.exports = router;
