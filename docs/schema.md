## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

##list
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, indexed
title           | string    | not null, unique
due             | date      | not null
completed       | boolean   | not null, default: false

##Tasks

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
list_id         | integer   | not null, indexed
title           | string    | not null, unique
due             | date      | not null
completed       | boolean   | not null, default: false
