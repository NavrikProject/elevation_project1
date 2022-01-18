const connection = require("../dbConnection.js");

exports.createTraineeProfile = async (req, res, next) => {
  const id = req.body.id;
  const mobile = req.body.mobile;
  const dob = req.body.dob;
  const graduate = req.body.graduate;
  const profession = req.body.profession;
  const experience = req.body.experience;
  const address = req.body.address;

  connection.query(
    "SELECT * FROM user_dtls WHERE user_dtls_id = ?",
    [id],
    (err, result) => {
      if (!result) {
        res.send(err.message);
      }
      if (result) {
        // const email = result[0].user_email;
        res.send("the user found ");
        // connection.query(
        //   "INSERT INTO trainee_dtls (user_dtls_id, trainee_email,trainee_mobile,trainee_dob, trainee_address, trainee_experience, trainee_graduate,trainee_profession) VALUES (?, ?, ?, ?, ?, ?,?,?)",
        //   [id, email, mobile, dob, address, experience, graduate, profession],
        //   (err, data) => {
        //     if (err) {
        //       res.send(err.message);
        //     } else {
        //       res.send(data);
        //     }
        //   }
        // );
      }
    }
  );
};

exports.updateTraineeProfile = async (req, res, next) => {
  const id = req.params.id;
  const mobile = req.body.mobile;
  const dob = req.body.dob;
  const graduate = req.body.graduate;
  const profession = req.body.profession;
  const experience = req.body.experience;
  const address = req.body.address;
  const file = req.files.file;

  let uploadPath;
  uploadPath = __dirname + "/images/" + file.name;

  connection.query(
    "SELECT * FROM users_dtls WHERE user_dtls_id=? ",
    [id],
    (err, result) => {
      if (result.length > 0) {
        const email = result[0].user_email;
        const sqlUpdate =
          "UPDATE trainee_dtls SET trainee_mobile=?,trainee_dob=?, trainee_address=?, trainee_experience=?, trainee_graduate=?,trainee_profession=?";
        connection.query(
          sqlUpdate,
          [mobile, dob, address, experience, graduate, profession],
          (err, result) => {
            if (result) {
              res.send("Successfully updated the username and password");
            } else {
              res.send(err.message);
            }
          }
        );
      } else {
        res.send(err.message);
      }
    }
  );
};

exports.checkTraineeDetails = async (req, res, next) => {
  const username = req.body.username;
  const id = req.body.id;
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_dtls_id=? AND user_email=?",
      [id, username],
      (err, result) => {
        if (!result) {
          console.log(err.message);
          res.send(err.message);
        }
        if (result.length > 0) {
          res.send({
            id: result[0].user_dtls_id,
            email: result[0].user_email,
          });
        } else {
          res.send("User not found");
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
exports.getOnlyUserDetails = async (req, res, next) => {
  const id = req.params.id;
  const sqlSelect = "SELECT * FROM trainee_dtls WHERE user_dtls_id =?";

  connection.query(sqlSelect, [id], (err, result) => {
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No result found. Please update the details of the user");
    }
  });
};
