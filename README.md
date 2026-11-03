# 🔐 Authentication Pages – Full Stack Project

## 📌 Project Description

This is an **Authentication Pages** web application built using **React.js, Django REST Framework, and MySQL**.

The project provides a simple user authentication system where users can create an account and log in using their registered credentials. It integrates a React frontend with a Django REST API to handle user registration, login, and database operations.

---

## 🚀 Features

### 📝 User Registration
* User registration with username, first name, last name, email, date of birth, gender, and password
* Confirm password validation before submitting the form
* Registration API integration with Django REST Framework
* Store user details in the MySQL database
* Handle duplicate username and email validation
* Display registration success and error messages
* Automatically redirect to the login page after successful registration

### 🔐 User Login
* User login using username and password
* Login API integration with Django REST Framework
* Validate user credentials through the backend
* Display login success and error messages
* Handle invalid username and password
* Handle API request and server connection errors

### 🧭 Navigation
* Page navigation using React Router DOM
* Navigate between registration and login pages
* Use `NavLink` for page navigation
* Use `useNavigate()` for programmatic navigation
* Redirect to the login page after successful registration

### 📱 User Interface
* Responsive registration and login forms
* Custom CSS styling
* User-friendly form layouts
* Input validation using HTML form attributes
* Display appropriate messages for different API responses

---

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Axios
* React Router DOM
* Python
* Django
* Django REST Framework
* MySQL
* Git and GitHub

---

## 🗄️ Database

MySQL is used as the relational database for storing user account information.

The project uses Django models and Django REST Framework serializers to manage user data.

Main data entity:

* `Register` – Stores username, first name, last name, email, date of birth, gender, and password.

---

## 🔄 REST API Operations

### Create (POST)
* Register a new user
* Authenticate a user through the login API

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/register/` | Register a new user |
| POST | `/api/login/` | Authenticate a user |

---

## 🧩 Project Structure

```text
authentication_pages/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── RegisterPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── backend/
│   ├── manage.py
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
│   │
│   └── accounts/
│       ├── migrations/
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       └── admin.py
│
├── .gitignore
└── README.md
```

*Note: Update the frontend structure if your React components are organized differently inside the `src` folder.*

---

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Sivaponnuvel/authentication_pages.git
```

### 2. Open the project folder

```bash
cd authentication_pages
```

### 3. Create and activate a Python virtual environment

```bash
python -m venv env
```

For Windows PowerShell:

```powershell
.\env\Scripts\Activate.ps1
```

### 4. Install backend dependencies

```bash
pip install django djangorestframework django-cors-headers mysqlclient
```

### 5. Configure MySQL

Create a MySQL database and configure the database credentials in Django's `settings.py`.

### 6. Run database migrations

Navigate to the directory containing `manage.py`:

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

### 7. Start the Django backend

```bash
python manage.py runserver
```

Backend URL:

```text
http://127.0.0.1:8000/
```

### 8. Install frontend dependencies

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
```

### 9. Start the React application

```bash
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173/
```

---

## ✨ Key Functionalities

* React Functional Components
* React Hooks (`useState`)
* Form state management
* Event handling using `onChange` and `onSubmit`
* Dynamic Routing using React Router DOM
* Programmatic Navigation using `useNavigate`
* REST API Integration using Axios
* Django REST Framework serializers
* Django models and database migrations
* MySQL database integration
* Password and confirm password validation
* API response and error handling
* Frontend and backend integration
* Component-based architecture
* Responsive user interface

---

## 📌 Future Improvements

* 🔐 Implement secure password hashing and authentication
* 🎟️ JWT-based authentication
* 🚪 User logout functionality
* 👤 User profile management
* 📧 Email verification during registration
* 🛡️ Protected routes and API authorization
* 🔄 Persistent login sessions
* 🧪 Automated frontend and backend testing

---

## 🙋‍♂️ Author

**Sivaponnuvel S**


---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
