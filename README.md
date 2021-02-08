# Board Gamer [![Build Status](https://www.travis-ci.com/weppo-team/weppo-project.svg?token=Cyxz2snQqipGxDYfjq5P&branch=main)]()

**Board Gamer** is a platform that let you play some of the most popular board games. You should be able to play online against other players in at least one game.

As a user you have ELO ranking for all games that let you track your progress and determine if you got better in the game.

## Domain

Web app should be served here: [https://weppoproject.herokuapp.com/](https://weppoproject.herokuapp.com/). If it is not available at this domain, we probably deleted it, because heroku plan we are using no longer permit us to host it :smile:

## Authors

The app has been developed by [Dawid Motak](https://github.com/Motii1), [Krystian Sańczyk](https://github.com/nlins8224), [Przemysław Stasiuk](https://github.com/PrzemyslawStasiuk).

## Technologies

It's a web application with the front-end structured with React and the back-end made in NodeJS. We used MongoDB as our database.

## Environment

You should create `.env` file inside `backend/` directory. It should include the following variables:

```
DB_URI=...
JWT_SECRET=...
```

## Local setup

Firstly you need to install all required packages. To achieve that you should run `yarn install` command inside `frontend` and `backend` directories. Then you should start client and server:

```
cd frontend/
yarn start
cd backend/
yarn dev:start
```

That's it :smile:. The app is now up and running.
