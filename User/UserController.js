var UserModel = require('./UserModel.js');

/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

    /**
     * UserController.list()
     */
    list: function (req, res) {
        UserModel.find(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }
            return res.json(Users);
        });
    },

    /**
     * UserController.show()
     */
    show: function (req, res) {
      console.log(req.params)
        var id = req.params.id;
        UserModel.findOne({Auth0Id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }
            if (!User) {
                return res.status(200).json({
                    message: 'No such User'
                });
            }
            return res.json(User);
        });
    },

    /**
     * UserController.show()
     */
    getById: function (req, res) {
      console.log(req.params)
        var id = req.params.id;
        UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }
            if (!User) {
                return res.status(200).json({
                    message: 'No such User'
                });
            }
            return res.json(User);
        });
    },

    /**
     * UserController.create()
     */
    create: function (req, res) {
      console.log(req.body)
        var User = new UserModel({
          Alias : req.body.Alias,
          FirstName : req.body.FirstName,
          LastName : req.body.LastName,
          Age : req.body.Age,
          BirthDate : req.body.BirthDate,
          Location : {
            Latitude : req.body.Location.Latitude,
            Longitude : req.body.Location.Longitude,
            City : req.body.Location.City,
            State : req.body.Location.State,
          },
          ProfileImage : req.body.ProfileImage,
          CoverImage : req.body.CoverImage,
          Auth0Id: req.body.Auth0Id
        });

        User.save(function (err, User) {
          console.log(err, User)
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating User',
                    error: err
                });
            }
            return res.status(201).json(User);
        });
    },

    /**
     * UserController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        UserModel.findOne({Auth0Id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User',
                    error: err
                });
            }
            if (!User) {
                return res.status(200).json({
                    message: 'No such User'
                });
            }

            User.Alias = req.body.Alias ? req.body.Alias : User.Alias;
            User.FirstName = req.body.FirstName ? req.body.FirstName : User.FirstName;
            User.LastName = req.body.LastName ? req.body.LastName : User.LastName;
            User.Age = req.body.Age ? req.body.Age : User.Age;
            User.BirthDate = req.body.BirthDate ? req.body.BirthDate : User.BirthDate;
            User.Location.Latitude = req.body.Location.Latitude ? req.body.Location.Latitude : User.Location.Latitude;
            User.Location.Longitude = req.body.Location.Longitude ? req.body.Location.Longitude : User.Location.Longitude;
            User.Location.City = req.body.Location.City ? req.body.Location.City : User.Location.City;
            User.Location.State = req.body.Location.State ? req.body.Location.State : User.Location.State;
            User.ProfileImage = req.body.ProfileImage ? req.body.ProfileImage : User.ProfileImage;
            User.CoverImage = req.body.CoverImage ? req.body.CoverImage : User.CoverImage;
            User.Auth0Id = req.body.Auth0Id ? req.body.Auth0Id : User.Auth0Id;
			
            User.save(function (err, User) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating User.',
                        error: err
                    });
                }

                return res.json(User);
            });
        });
    },

    /**
     * UserController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        UserModel.findByIdAndRemove(id, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the User.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
