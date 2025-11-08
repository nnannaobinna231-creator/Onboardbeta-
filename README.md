# 🧑‍💼 Onboardbeta — HR App 
Onboardbeta is a system for managing employee onboarding, built with Node.js, Express, and MySQL. It handles secure user registration, authentication, profile management, and supports uploading profile pictures and storing key HR data.

## 🚀 Features
- User registration with:
- Full name, email, password
- Start date, department, job title, employment ID
- Profile picture upload
- Email verification on registration
- Secure login with JWT authentication
- Protected routes for profile access and updates
- Password change with email confirmation
- MySQL database integration via Sequelize ORM

## 🧱 Tech Stack
- Frontend: HTML, CSS
- Backend: Node.js + Express
- Database: MySQL
- ORM: Sequelize
- Auth: bcrypt + JWT
- File Uploads: multer
- Email: nodemailer


## 🔐 API Endpoints
Auth
- POST /api/auth/register — Register new user (with profile picture)
- POST /api/auth/login — Login and receive JWT
- GET /api/auth/verify/:token — Verify email
- POST /api/auth/verify-password-change/:token — Confirm password change
Profile
- GET /api/profile — Get user profile (protected)
- PUT /api/profile — Update profile info (protected)
- PUT /api/profile/change-password — Request password change (protected)
