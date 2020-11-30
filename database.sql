-- Users table to store login and profile data
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (32),
    "last_name" VARCHAR (32),
    "avatar_url" TEXT DEFAULT '/assets/images/MadTofu.jpg',
    "bio" TEXT,
    "total_wins" INT NOT NULL DEFAULT 0,
    "total_losses" INT NOT NULL DEFAULT 0
);

-- Games table to store user, date, and result of each game
CREATE TABLE "games" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"game_won" BOOLEAN NOT NULL DEFAULT 'false'
);