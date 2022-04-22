# EZJSBLOG

is a small and "easy" blog engine.

## Quick start

Clone this repo, run `npm run init && npm run generate-key`. Two new files should have shown up in the root directory `blog.db` and `.key`. `blog.db` is a sqlite3 database file and is the file that holds all of your posts. `.key` is exactly what it sounds like. Instead of a username+password combo, ezjsblog uses this file to authenticate you when making edits. Make sure to keep it in a safe place. If you accidentally remove this file you can simply just generate a new one. As long as there is a keyfile in the root directory everything should just work. To minimize manual typing you can just run `init.sh`

Create a new .env file (just copy and paste .env.example). You should now be able to spin up blog-engine by executing `docker-compose up`.

## API

`GET /posts` returns the ID, Title and Creation date of every available document.

`GET /posts/:id` returns a full document including meta-data.

`POST /posts` creates a new document. Request format: `{"title": "document title", "body": "document body"}`

`PATCH /posts/:id` edits an existing document, Request format same as `POST`

`DELETE /posts/:id` deletes a single document.

## Where is the admin page?

There is none. To use ezjsblog without writing custom code you can use [these scripts.](https://github.com/fgrhlm/ezjsblog-scripts)