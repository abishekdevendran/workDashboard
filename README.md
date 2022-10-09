# Work Dashboard

Work Dashboard is a client/server application for a simple productivity tracker.
<div align=center>
<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/abishekdevendran/workDashboard" />
<img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/abishekdevendran/workDashboard" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/abishekdevendran/workDashboard" />
</div>

## Dev Setup

<ol>
    <li>Clone repo down to local
    <li>run "npm install" to install dependencies
    <li>run "npm run dev" to concurrently start server(index.ts) and client(vite)
    <li> Vite should Auto open client once started(--open flag)
</ol>

## Tech Stacks Used

<ul>
    <li>CSS:
    <ol>
        <li>SCSS
        <li>tailwindcss
    </ol>
    <li>Javascript:
    <ol>
        <li>TypeScript
        <li>nodejs
        <li>ReactJS
    </ol>
    <li>MongoDB (NoSQL approach)
</ul>

## Routes Overview

<ul>
    <li>Login Route (/login)
    <li>Registration Route (/register)(Protected)
    <li>Home Route (/)
    <li>Dashboard Route (/dashboard)(Protected)
    <li>TaskView Route (/taskview)(Protected)(Admin only)
    <li>EmployeesView Route (/employeesView)(Protected)
    <li>Employee Route (/employeesView/:id)(Protected)(Admin only)
    <li>Edit Profile Route (/editProfile)(Protected)
    <li>CatchAll Route (*)
</ul>

## Packages/Libraries overview

Following are the NPM Libraries used in this web app
<ol>
    <li>Express - Web app framework (REST APIs)
    <li>Concurrently - Running of multiple concurrent commands
    <li>mongoose - MongoDB ORM for express and nodejs
    <li>bcryptjs - Password hashing and comparing package
    <li>fetchAPI - Javascript client library that can be used to access and manipulate HTTP / REST endpoints
    <li>Fontawesome/React-icons
    <li>Redis/connect-redis - In memory data structure store to cache twitter api responses
    <li>cookie-parser - cookie managing tool, used for auth
    <li>dotenv - Environment variable support
    <li>react-router-dom - React router support for basic react routing
    <li>Tailwindcss - Tailwindcss support for CSS classes
    <li>SASS - SCSS support/SASS compiler
    <li>React-hot-toast - Customisable and fully controllable toast notifications
    <li>helmet - Security Tool to safeguard your Express/Web App from Vulnerabilities
    <li>nodemon - Express listening reactoring
    <li>React-Query - Complete caching and reactive HTTP responses client library
    <li>Recharts - React Charts Library
    <li>React-minimal-pie-chart - React pie chart library
    <li>Express-session - Session management for express





