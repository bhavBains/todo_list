const express = require('express');
const router = express.Router();

// Handling CORS
const cors = require('cors');

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
router.get('/', cors(), (req, res) => {
  Item.find().sort({date: -1}) //Prepends new Items on top
    .then(items => res.json(items))
});

// @route POST api/items
// @desc Create new item
router.post('/', cors(), (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })
  newItem.save().then(item => res.json(item))
  .catch(err => res.status(404).json({ success: false }));
});

// @route Delete api/items/:id
// @desc Delete an item
router.delete('/:id', cors(), (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.json({ success: false }));
});

// @route Post api/items/:id
// @desc Update an item
// CORS preflight response is not supported in PUT Method
// So have to use POST Method to update item
router.post('/:id', cors(), (req,res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.name = req.body.name;
      item.completed = req.body.completed;
      item.save()
    })
    .catch(err => console.log(err));
});


module.exports = router;