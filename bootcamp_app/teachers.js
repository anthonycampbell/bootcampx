const { Pool } = require('pg');
const args = process.argv.slice(2);
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT teachers.name AS name, cohorts.name AS cohort
FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '${args[0] || 'JUL02'}'
GROUP BY teachers.id, cohorts.name
ORDER BY teachers.name;
`).then(res => {

  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.name}`);
  })
})