const Employee = ({ employee }) => {
  const capitalizer = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <tr>
      <td>
        <img src={employee.picture.thumbnail} alt="Employee Picture"></img>
      </td>
      <td>{employee.name.title}</td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.dob.age}</td>
      <td>{capitalizer(employee.gender)}</td>
      <td>{employee.location.country}</td>
    </tr>
  );
};

export default Employee;
