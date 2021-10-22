#! /bin/bash

if [ ! -f .env ]; then
    cp .env.example .env
fi

# Installing node depedencies
npm install --silent

# Running migrations
npx prisma migrate dev

# Starting application
npm run dev