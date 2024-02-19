# GitHub User App

This is a simple React application that fetches and displays GitHub users using the GitHub Users API. It consists of two pages: User List and User Details.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installing

1. Clone the repository:

```bash
git clone https://github.com/prasanthk99/github-user-app.git
cd github-user-app
```

2. Install dependencies:

```bash
npm install
```

3. Running the App:

```bash
npm start
```

Open http://localhost:3000 to view it in the browser.

# Pages

## User List
- Default screen that fetches users from the GitHub API and displays them in a list.
- Shows Avatar, First Name, Last Name, and Username for each user.
- Clicking on a user's item in the list will navigate to the User Details page.

## User Details
- Displays detailed information for the selected user.
- Shows extended profile information, summary on followers, following, and the number of public repositories.

# Built With
- React - JavaScript library for building user interfaces.
- React Router - Declarative routing for React.js.
- Material-UI - React components library for Material Design.

# API Used
GitHub Users API - Publicly available API for fetching GitHub user data.

# Author
Prasanth K