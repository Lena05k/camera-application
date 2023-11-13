const db = require('../models');
const { title} = require("process");
const Repost = db.Repost;

exports.create = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  };

  const repost = {
    id: req.body.id,
    repostId: req.body.repostId,
  };

  Repost.create(repost)
    .then((data) => {
       res.send(data);
    })
    .catch((err) => {
       res.status(500).send({
         message: err.message || "Some error occurred while creating the Repost.",
    });
  });
};

exports.findAll = (req, res) => {
  Repost.findAll()
    .then(data => {
       res.send(data);
    })
    .catch(err => {
       res.status(500).send({
          message: err.message || "Some error occurred while creating the Repost.",
       })
    });
};

//
// exports.findOne = (req, res) => {
//     const id = req.params.id;
//
//     Repost.findByPk(id)
//         .then(data => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: `Cannot find Repost with id=${id}.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Repost with id=" + id
//             });
//         });
// };
//
// exports.update = (req, res) => {
//
// };
//
// exports.delete = (req, res) => {
//
// };
//
// exports.deleteAll = (req, res) => {
//
// };
//
// exports.findAllPublished = (req, res) => {
//
// };