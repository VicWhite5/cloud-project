use("ramen-db");
db.createUser({user: "root", pwd: "password", roles: [ { role: "readWrite", db: "ramen-db" } ]});