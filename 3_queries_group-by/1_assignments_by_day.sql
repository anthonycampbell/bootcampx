SELECT DAY, COUNT(assignments) AS total__assignments
FROM assignments
GROUP BY day
ORDER BY day;