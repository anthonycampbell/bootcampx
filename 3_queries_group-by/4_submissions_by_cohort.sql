SELECT cohorts.name, COUNT(assignment_submissions) AS total__submissions
FROM cohorts
  JOIN students ON (cohort_id = cohorts.id)
  JOIN assignment_submissions ON (students.id = student_id)
GROUP BY cohorts.name
ORDER BY total__submissions DESC;