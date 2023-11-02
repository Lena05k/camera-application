const db = require('../models');
const { title} = require("process");
const Repost = db.Repost;
// const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const repost = {
        id: req.body.id,
    };
   return Repost.create(repost)
       .then((repost) => {
           console.log('>> Created repost: ' + JSON.stringify(repost, null, 4));
       })
       .catch((err) => {
           console.log('>> Error while creating repost: ', err)
       })
};

exports.findOne = (req, res) => {
    const repost = req.query;

    Repost.findOne(repost)
        .then(data => {
            // console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Repost."
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