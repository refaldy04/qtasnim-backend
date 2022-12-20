const { Client, Query } = require('pg');

// Connect to the database
const client = new Client({
  host: 'db.mhntnrynnarudsbvsanz.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: '7xBR72bjzL4gxbW',
});

const submit = Query.prototype.submit;
Query.prototype.submit = function () {
  const text = this.text;
  console.log(text);
  submit.apply(this, arguments);
};

module.exports = client;
