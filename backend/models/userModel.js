const pool = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  static async findByUsername(username) {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1', 
      [username]
    );
    return result.rows[0];
  }

  static async create(username, email, password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id', 
      [username, email, hashedPassword]
    );
    
    return result.rows[0];
  }

  static async checkExistingUser(username, email) {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2', 
      [username, email]
    );
    return result.rows.length > 0;
  }
}

module.exports = User;