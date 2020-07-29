# SitaTechChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Database preperation

1. Create a MySQL database.
2. In your root project folder create `.env` file to keep information about mySQL autentication, DB_HOST, DB_USER, DB_NAME, DB_PASS.
3. To create tables the necessary tables with some sample data run `node configuration/db.config.js` in your terminal. You can see definition of this table in `configuration/db.config.js` file.

## Development server

1. Clone the repo: `git@github.com:paulinaczybir/sita-tech-challenge.git`
2. Go into the project directory: `cd sita-tech-challenge`
3. Install dependencies: `npm install`
4. In the project directory start the backend server on `http://localhost:4600/`: `node server.js`
5. Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
