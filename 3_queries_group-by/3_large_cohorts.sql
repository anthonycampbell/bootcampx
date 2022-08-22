SELECT cohorts.name, COUNT(students) AS total_students
FROM cohorts
  JOIN students ON (cohort_id = cohorts.id)
GROUP BY cohorts.name
HAVING COUNT(students) >= 18
ORDER BY total_students;