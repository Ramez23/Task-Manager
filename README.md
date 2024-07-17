Overview: Developed a robust Task Management System API using Node.js. This RESTful API allows users to manage their tasks efficiently, organizing them into categories for better clarity and control. The system ensures secure user authentication and supports a wide range of functionalities to meet diverse task management needs.

Key Features:

User Authentication: Supports basic HTTP authentication using username and password to ensure secure access.
User and Task Management:
Stores basic user information including name, email, and password.
Allows users to create and manage multiple categories.
Supports tasks within these categories, which can be named and organized.
Task Types and Sharing:
Supports two types of tasks: text tasks (with a text body) and list tasks (with list items containing text).
Tasks can be set as shared (visible to all users and unauthenticated viewers) or private (visible only to the creator).
CRUD Operations:
Full CRUD (Create, Read, Update, Delete) support for both categories and tasks.
Advanced Functionalities:
Pagination: Handles large sets of data efficiently by breaking them into pages.
Filtering: Allows tasks to be filtered by category name and by their shared option (Public/Private).
Sorting: Enables sorting of tasks by category name and by their shared option (Public/Private).
Entities:

User Info: Includes basic user details such as name, email, and password.
Categories: Each user can own multiple categories, each containing multiple tasks.
Tasks: Can be either text tasks with a text body or list tasks with list items.
API Functionalities:

CRUD Actions for Categories: Create, read, update, and delete operations for task categories.
CRUD Actions for Tasks: Create, read, update, and delete operations for individual tasks.
Pagination and Filtering: Efficient data handling through pagination and filtering by category and task shared status.
Sorting: Tasks can be sorted by category name and shared status.
