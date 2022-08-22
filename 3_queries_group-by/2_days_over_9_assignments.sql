SELECT DAY, COUNT(assignments) AS total__assignments
FROM assignments
GROUP BY day
HAVING COUNT(assignments) > 9
ORDER BY day;