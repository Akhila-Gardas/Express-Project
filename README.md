# Express Frontend

## Project Overview
This project is an Express frontend deployed on an Amazon EC2 instance.

## Part 1 – Deployment
- Deployed Express on EC2
- Express runs on port 3000
- Installed dependencies using npm
- Used PM2 to keep the application running

## Part 2 – CI/CD
- Created Jenkins job: `express-app`
- Jenkins pulls code from this GitHub repository
- Runs `npm install`
- Restarts the Express application using PM2
- Configured GitHub webhook to trigger Jenkins after a push

## Technologies
- Node.js
- Express
- Git/GitHub
- Jenkins
- PM2
- AWS EC2
