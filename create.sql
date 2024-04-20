CREATE TABLE lak.author (
  author_id SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE lak.category (
  category_id SERIAL PRIMARY KEY,
  category VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE lak.quote (
  quote_id SERIAL PRIMARY KEY,
  quote VARCHAR(255) NOT NULL UNIQUE,
  author_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES lak.author(author_id) ON DELETE CASCADE,
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES lak.category(category_id) ON DELETE CASCADE
);

INSERT INTO lak.author (author) VALUES ('Neil deGrasse Tyson');
INSERT INTO lak.author (author) VALUES ('Mark Twain');
INSERT INTO lak.author (author) VALUES ('Albert Einstein');
INSERT INTO lak.author (author) VALUES ('Arthur C. Clarke');
INSERT INTO lak.author (author) VALUES ('The Dude');
INSERT INTO lak.category (category) VALUES ('Knowledge-Learning');
INSERT INTO lak.category (category) VALUES ('Self-Improvement');
INSERT INTO lak.quote (quote, author_id, category_id) VALUES ('no one is dumb who is curious. The people who dont ask questions remain clueless throughout their lives.', 1, 1);
INSERT INTO lak.quote (quote, author_id, category_id) VALUES ('Continuos improvement is better than delayed perfection.', 2, 2);
INSERT INTO lak.quote (quote, author_id, category_id) VALUES ('Never memories what you can look up in books.', 3, 1);
INSERT INTO lak.quote (quote, author_id, category_id) VALUES ('I dont pretend we have all the answers. But the questions are certainly worth thinking about.', 4, 1);
INSERT INTO lak.quote (quote, author_id, category_id) VALUES ('Thats just, like, your opinion, man.', 5, 1);
