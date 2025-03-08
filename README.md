
# Expense Management System using MERN Stack by Kartik Anil Nagare


**# Expense Management System**  

## **Project Overview**  
The Expense Management System is a web-based application designed to help users track and manage their daily expenses efficiently. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), the system ensures scalability, responsiveness, and a seamless user experience.

## **Objectives**  
1. Simplify expense tracking for individuals and organizations.  
2. Provide detailed insights into spending patterns for better financial management.  
3. Enable users to create, update, and delete expenses and categories.  
4. Generate comprehensive reports based on user-defined time periods and categories.  

## **Key Features**  

### **User Authentication and Authorization**  
- Secure user registration and login system.  
- Role-based access control for administrative functionalities.  

### **Expense and Category Management**  
- Users can add, update, and delete expense entries and categories.  
- Expenses can be tracked by date, category, and description.  
- Option to attach receipts or relevant documents to expense entries.  

### **Dashboard and Reporting**  
- A visual dashboard displaying an overview of total expenses, expenses by category, and recent transactions.  
- Customizable reports based on date ranges and categories.  
- Pie charts and bar graphs for easy visualization of spending trends.  

### **Responsive User Interface**  
- A clean, user-friendly design optimized for desktop, tablet, and mobile devices.  
- Built using React.js with reusable UI components and efficient state management.  
- Background effects implemented with tsparticle library.  
- Additional libraries used include unique-names-generator, react-datepicker, and moment.js.  

## **Technical Architecture**  

### **Frontend**  
- Developed using React.js for dynamic UI components and state management.  
- Responsive design achieved using CSS frameworks like Bootstrap and Material-Icons.  

### **Backend**  
- Built using Node.js and Express.js to provide a RESTful API.  
- Authentication and authorization handled using JSON Web Tokens (JWT) and middleware for secure endpoints.  

### **Database**  
- Utilizes MongoDB to store user data, expenses, and categories.  
- Schema definition and validation implemented with Mongoose ORM.  

### **Deployment**  
- The frontend is deployed on AWS for scalability and performance.  
- The backend is hosted on Render for efficient backend management.  

This system ensures a seamless experience in tracking and managing expenses while providing insightful financial analytics.



## Run Locally

Clone the project

```bash
  git clone https://github.com/kartik3165/EduNetIntern-project04-kanbs.git
```

Go to the project directory

```bash
  cd EduNetIntern-project04-kanbs
```

Go to the frontend directory and Install dependencies

```bash
  cd frontend
```
```bash
  npm install
```

Go to the backend directory and Install dependencies

```bash
  cd backend
```
```bash
  npm install
```

Start the frontend server

```bash
  npm start
```


Start the backend server

```bash
  npm run dev
```

## Environment Variables  

To run this project, add the following environment variables to a `.env` file inside the `config` folder in the backend directory:  

- **`MONGO_URL`**: Your MongoDB connection string  
- **`PORT`**: The port number for the backend server  

## Tech Stack

**Client:** React, Redux, react-bootstrap, Material Icons, tsparticles

**Server:** Node, Express

**Database:** MongoDB


## Screenshots


