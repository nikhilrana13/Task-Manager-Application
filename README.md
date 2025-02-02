This is a Task Manager web application built using Express.js, Node.js, MongoDB, and EJS for rendering views. The app allows users to create, view, edit, and delete tasks. The front-end of the application is styled using Tailwind CSS for a modern and responsive design. Express.js is used for handling routing and API requests.

Features:
Create a Task: Users can add new tasks with titles and descriptions.

View All Tasks: Displays a list of all tasks with options to edit or delete them.

Edit Tasks: Users can update the title and description of an existing task.

Delete Tasks: Users can remove tasks from the task list.

Responsive Design: The front-end layout is fully responsive, ensuring it looks great on devices of all sizes (using Tailwind CSS).

Dynamic Routing: Express.js handles dynamic routes to show specific tasks for editing and deletion.

Tech Stack:

Backend: Express.js, Node.js

Database: MongoDB (using Mongoose for ORM)

Frontend: EJS (for server-side rendering), Tailwind CSS (for styling)

Routing: Express.js for routing and handling HTTP requests

Template Engine: EJS for rendering dynamic views on the server

Routes:

GET /: Home page, shows a form to create a new task.

GET /alltasks: Lists all tasks stored in the database.

GET /edit/:id: Displays a form to edit an existing task based on its id.

POST /create: Submits a new task to the database.

POST /update/:id: Updates an existing task in the database.

GET /delete/:id: Deletes a task from the database based on its id.
