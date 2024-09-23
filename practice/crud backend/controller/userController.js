import con from '../connection/connection.js';

class UserController {
  static insertUser = (req, res) => {
    const { rollno, name, email } = req.body;

    // Input validation
    if (!rollno || !name || !email) {
      return res.status(400).json({
        status: "error",
        message: "Invalid input data"
      });
    }

    const sql = "INSERT INTO students (rollno, name, email) VALUES (?, ?, ?)";

    con.query(sql, [rollno, name, email], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({
          status: "error",
          message: "Database error",
          error: err.message
        });
      }

      res.status(200).json({
        status: "success",
        message: "Inserted successfully",
        data: result
      });
    });
  };
  static updateUser = (req, res) => {
    const { id, rollno, name, email } = req.body;

    // Input validation
    if (!rollno || !name || !email || !id) {
      return res.status(400).json({
        status: "error",
        message: "Invalid input data"
      });
    }

    const sql = "UPDATE students SET rollno = ?, name = ?, email = ? WHERE id = ?";
    
    con.query(sql, [rollno, name, email, id], (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({
          status: "error",
          message: "Database error",
          error: err.message
        });
      }
      res.status(200).json({
        status: "success",
        message: "Updated successfully",
        data: result
      });
    });
  };
  static deleteUser = (req, res) => {
    const { id } = req.body;

     // Input validation
     if (!id) {
      return res.status(400).json({
        status: "error",
        message: "Invalid input data"
      });
    }

    const sql = "DELETE FROM students WHERE id = ?";
    
    con.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({
          status: "error",
          message: "Database error",
          error: err.message
        });
      }
      res.status(200).json({
        status: "success",
        message: "Deleted successfully",
        data: result
      });
    });
  }
  static getUser = (req, res) => {
    const sql = "SELECT * FROM students";
    con.query(sql, (err, result) => {
      if (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({
          status: "error",
          message: "Database error",
          error: err.message
        });
      }
      res.status(200).json({
        status: "success",
        message: "fetched successfully",
        data: result
      });
    });
  }
}

export default UserController;
