# Employee Management App (React + TypeScript)

A responsive, modular CRUD web application to manage employee records. Built using **React**, **TypeScript**, and **Bootstrap/Tailwind**, it includes employee listing, creation, editing, deletion, and a sample login page that connects to a backend server.


## Features

Local Sign-in form
Add, edit, and delete employees
View detailed employee info
Clean state management using `useState` and `useEffect`
Axios for API communication
Fully typed models with TypeScript
Responsive UI using Bootstrap/Tailwind


## Project Structure

---src/
│
├── components/
│   ├── auth/
│   │   └── Login.tsx
│   │
│   ├── employee/
│   │   ├── EmployeeForm.tsx         # Used for both create/edit
│   │   ├── EmployeeTable.tsx        # View/edit/delete from table
│   │   ├── EmployeeDetails.tsx      # Single employee view
│   │   └── EmployeeList.tsx         # Lists all employees
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Menu.tsx
│   │
│   └── shared/
│       ├── Counter.tsx
│       ├── Youtube.tsx
│       ├── Customer.tsx
│       └── ClassComp.tsx
│
├── models/
│   ├── IUsers.ts
│   ├── IUserList.ts
│   └── ILogin.ts
│
├── services/
│   ├── EmployeeService.ts          # CRUD with live API (axios)
│   └── LocalUserService.ts         # Local static data (for demo/dev)
│
├── routes/
│   └── AppRoutes.tsx
│
├── App.tsx
├── index.tsx
├── App.css
└── README.md


## Tech Stack

- React
- TypeScript
- Create React App (CRA)
- Axios
- Bootstrap / Tailwind CSS
- React Router DOM


## Available Routes

| Route       | Component        | Description                  |
|-------------|------------------|------------------------------|
| `/form`     | `FormComponent`  | Add/Edit employee            |
| `/table`    | `TableComponent` | Employee list view           |
| `/login`    | `Login.tsx`      | Local login (backend connect) |
| `/userlist` | `UserList.tsx`   | View static users (demo)     |



## Available RoutLive api services

Live API
Local static data 






