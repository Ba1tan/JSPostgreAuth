# Node.js PostgreSQL Authentication System

## Prerequisites
- Node.js (v14 or later)
- PostgreSQL
- npm

## Setup Steps
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with your PostgreSQL and JWT configuration:
   ```
   JWT_SECRET=your_very_secret_key
   DB_USER=your_postgres_username
   DB_HOST=localhost
   DB_NAME=your_database_name
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   ```

4. Ensure PostgreSQL is running and create the database specified in `.env`

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `POST /register`: Register a new user
- `POST /login`: Authenticate and receive JWT token

## Security Features
- Password hashing with bcrypt
- JWT-based authentication
- Input validation
- Unique username and email constraints
