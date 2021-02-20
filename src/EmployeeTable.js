import { useEffect, useState } from 'react';
import Employee from './Employee';
import resultFilter from './resultFilter';

const EmployeeTable = ({ employeeList, filter }) => {
  const [sortedList, setSortedList] = useState([]);
  const [tableFilter, setTableFilter] = useState(filter);

  useEffect(() => {
    setTableFilter(filter);
  }, [filter]);

  useEffect(() => {
    const res = resultFilter(employeeList, tableFilter);
    setSortedList(res);
  }, [tableFilter, filter]);

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Title</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {sortedList.map((employee) => (
          <Employee employee={employee} key={employee.login.md5} />
        ))}
      </tbody>
    </table>
  );
};
export default EmployeeTable;
