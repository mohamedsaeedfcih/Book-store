CREATE SCHEMA bms ;


-- bms.book definition

-- Drop table

-- DROP TABLE bms.book;

CREATE TABLE bms.book (
	book_id serial NOT NULL,
	book_title varchar(255) NOT NULL,
	book_author varchar(255) NOT NULL,
	book_publisher varchar(255) NOT NULL,
	book_isbn varchar(13) NOT NULL,
	book_description text NULL,
	book_pages int4 NULL,
	store_code varchar(50) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT book_pkey PRIMARY KEY (book_id)
);
-- bms.store definition

-- Drop table

-- DROP TABLE bms.store;

CREATE TABLE bms.store (
	store_id serial NOT NULL,
	store_name varchar(255) NOT NULL,
	store_address varchar(255) NOT NULL,
	store_code varchar(50) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT store_pkey PRIMARY KEY (store_id)
);