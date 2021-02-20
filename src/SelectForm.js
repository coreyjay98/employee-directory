import { useState, useEffect } from 'react';
import EmployeeTable from './EmployeeTable';

const SelectForm = () => {
  const [employeeList, setEmployeeList] = useState({ results: [] });
  const [sorter, setSorter] = useState('default');
  useEffect(async () => {
    async function fetchData() {
      const res = await fetch('https://randomuser.me/api/?results=20');
      const callRes = await res.json();
      setEmployeeList({ results: callRes.results });
    }
    fetchData();
  }, []);

  const sortSelection = (e) => {
    setSorter(e.target.value);
  };

  useState(() => {}, [sorter]);

  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={sortSelection}
      >
        <option>Filter/Sort</option>
        <option value="nameAZ">Name A-Z</option>
        <option value="nameZA">Name Z-A</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {employeeList.results.length > 1 ? (
        <EmployeeTable employeeList={employeeList} filter={sorter} />
      ) : (
        <h1>Fetching Employees ...</h1>
      )}
    </div>
  );
};
export default SelectForm;
