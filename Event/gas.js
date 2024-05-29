import mysql from 'mysql'

var con = mysql.createConnection({
  host: "144.76.57.59",
  user: "u1952119_Taw5406llR",
  password: "2VEZLuJHQxH+AYE+D2^YOA25",
  database: "s1952119_my-db1699977320"
});

let name = "Wazy";

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = `INSERT INTO whitelist (Nama) VALUES ('${name}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
