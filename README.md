## Zerodha Clone

A full-stack demo project that replicates core features of Zerodha's trading application. Built for personal learning and showcase purposes.

**🚀 Live Demo:** 
    Link - https://main.dluda969rbph4.amplifyapp.com/
    Must visit link for intraction with the project and better understanding

👉 - Login Credentials (for demo use):
        Email: demo@example.com
        Password: demo123
    
    You can also make your own account through signup

⚠️ Notes
        The dashboard currently displays preloaded demo data for holdings and portfolio values.

        A live stock market API was not integrated because it requires a paid subscription.

        All calculations (P&L, current value, day change) are performed on this demo dataset to simulate real trading behavior.

        The project structure is ready for live API integration — only the API key and subscription need to be added.
## Tech Stack

- **Frontend**: React, Tailwind CSS, Material UI, Bootstrap
- **Dashboard**: React (protected routes, charts)
- **Backend**: Node.js, Express, MongoDB, mongoose
- **Authentication**: JWT-based login/logout
- **Deployment**: Render (backend), AWS Amplify (dashboard and frontend)

## Folder Structure

├── frontend/ # Public-facing UI 
├── dashboard/ # Authenticated user dashboard 
├── backend/ # Express API and MongoDB logic

## Features

- User login/logout with JWT
- Holdings table with dynamic P&L calculations
- Vertical bar chart for stock prices
- Protected dashboard routes
- Responsive UI with Tailwind and used bootstrap 

## Installation

* Clone the repo:
```bash
git clone https://github.com/Sagar45-XT/ZerodhaClone.git

cd backend
npm install

cd ../frontend
npm install

cd ../dashboard
npm install


### **Running Locally**
```markdown
## Running Locally

### Start backend:
```bash
cd backend
npm start

### Start frontend
cd frontend
npm start

### Start Dashboard
cd dashboard
npm start

> **Note**: Still under development.

## Author
- Sagar Yaduwanshi

