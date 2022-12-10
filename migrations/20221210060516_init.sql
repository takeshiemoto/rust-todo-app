-- Add migration script here
CREATE TABLE todos
(
    id        serial PRIMARY KEY,
    text      text    NOT NULL,
    completed boolean NOT NULL DEFAULT false
);