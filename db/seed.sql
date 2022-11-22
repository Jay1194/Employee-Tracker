INSERT INTO departments
  (name)
VALUES
  ('Executive');
  ('Customer Service');
  ('Sales');
  ('Human Resources');
INSERT INTO roles (title, salary, department_id)
VALUES
  ('Sales rep', 60000, 1),
  ('Sales Intern', 30000, 1),
  ('Executive', 500000, 2),
  ('Ceo', 1250000, 2),
  ('Human Resources', 60000, 3),
  ('Customer Service', 25000, 3),
  ('customer service manager', 40000, 4),
  ('Marketing Intern', 40000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('jay', 'keen', 3, 4),
  ('brooke', 'sam', 1, 4),
  ('donny', 'n', 3, 4),
  ('flame', 'stonk', 1, 1),
  ('zz', 'vank', , 1),
  ('kyrie', 'kipple', 4, 4);
  ('jate', 'flong', 2, 2),
  ('jake', 'smith', 2, 2),