-- proletariat means worker
-- bourgeoisie means guy who manages workers

-- make an table of names from the table proletariat with the header 'Employee'
SELECT
    proletariat.Name AS 'Employee'
-- make two tables from the big Employee table: proletariat and bourgeoisie
FROM
    Employee AS proletariat,
    Employee AS bourgeoisie
-- filter what our tables will have.
WHERE
--  checks if the proletariat has a bourgeoisie
    proletariat.ManagerId = bourgeoisie.Id
    --  and then checks if the proletariat's salary is higher than the bourgeoisie's
    AND proletariat.Salary > bourgeoisie.Salary
;

-- note: I know that sometimes managers can be the proletariat


-- https://leetcode.com/problems/employees-earning-more-than-their-managers/