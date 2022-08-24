const { Pool } = require('pg');
const args = process.argv.slice(2);
const values = [];
args[0] ? values.push(`%${args[0]}%`) : values.push('FEB');
args[1] ? values.push(Number(args[1])) : values.push(5);
console.log(values);
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name AS student, cohorts.name AS cohort
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});