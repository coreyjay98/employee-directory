const resultFilter = (employeeList, filter) => {
  console.log('fuilly', filter);
  if (filter == 'nameAZ') {
    const sortAZ = employeeList.results.slice(0).sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    return sortAZ;
  } else if (filter == 'nameZA') {
    const sortZA = employeeList.results.slice(0).sort(function (a, b) {
      if (a.name.first > b.name.first) {
        return -1;
      }
      if (a.name.first < b.name.first) {
        return 1;
      }
      return 0;
    });
    return sortZA;
  } else if (filter == 'male') {
    const maleSort = employeeList.results.filter(
      ({ gender }) => gender == 'male'
    );
    return maleSort;
  } else if (filter == 'female') {
    const femaleSort = employeeList.results.filter(
      ({ gender }) => gender == 'female'
    );
    return femaleSort;
  } else return employeeList.results;
};
export default resultFilter;
