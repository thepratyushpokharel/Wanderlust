# WanderLust

WanderLust is a MERN-stack learning project built with **Node.js + Express + MongoDB + EJS**. It’s a travel-stay marketplace style app where users can browse listings, manage listings, post reviews/ratings, and make bookings.

## Features
- **User authentication & authorization** (sign up, login/logout, protected routes)
- **Listings management** (create, read, update, delete listings)
- **Reviews & ratings** (add/delete reviews, star rating UI)
- **Booking system** (create bookings, view bookings, update booking status)
- **Responsive UI** with reusable EJS layouts/partials and static assets

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Auth**: Passport.js (Local Strategy)
- **Templating**: EJS
- **Validation**: Joi
- **Frontend**: HTML/CSS/JS (served via `public/`)

## Project Structure
```
WanderLust/
  app.js
  routes/
  controller/
  models/
  views/
  public/
  utils/
  init/
  Schema.js
  middleware.js
```

## Getting Started
### Prerequisites
- Node.js (LTS recommended)
- MongoDB (local or Atlas)

### Install
```bash
npm install
```

### Configure environment variables
Create a `.env` file in `WanderLust/` (do **not** commit it) and add values like:
- `MONGO_URL` (or your MongoDB connection string)
- `SESSION_SECRET`

> If your project currently hardcodes config in `app.js`, you can still run without `.env`. Adding `.env` support is recommended for deployment.

### Run the app
```bash
nodemon app.js
```
Then open the app in your browser at the URL printed in the terminal.

### (Optional) Seed sample data
If you want sample listings (development only):
```bash
node init/index.js
```

## Team Responsibilities (5-member project)
- **Digantaraj Baral**: User Authentication & Authorization
- **Pratyush Pokharel**: Listings Management
- **Rohan Shrestha**: Reviews & Ratings System
- **Purnima Thapa**: Booking System
- **Devilal Yadav**: Frontend & UI/UX

## Notes
- Shared/core files like `app.js`, `middleware.js`, and `Schema.js` affect multiple modules—changes should be coordinated.
