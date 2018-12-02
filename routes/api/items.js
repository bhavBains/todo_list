const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
router.get('/', (req, res) => {
  Item.find().sort({date: -1})
    .then(items => res.json(items))
});

// @route POST api/items
// @desc Create new item
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })
  newItem.save().then(item => res.json(item))
  .catch(err => res.status(404).json({ success: false }));
});

// @route Delete api/items/:id
// @desc Delete an item
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.put('/:id', (req,res) => {
  const id = req.body;
  Item.findByIdAndUpdate(id, { completed: !completed}, {new:true}, (err, item) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json({success: true});
  })    
})


module.exports = router;