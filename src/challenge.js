module.exports.companies = function (rawData) {
    // let result = [];
    // let goodStuff = {
    //   'name': companyName,
    //   'employees': employeeArray
    // };

    let people = rawData.people;
    let companies = rawData.companies;
    let employments = people.map(function(num,index){
      return people[index];
    })

    let emplotmentInfo = employments.map(function(num, index) {
      return employments[index].employments;
    })


    for (let i = 0; i < companies.length; i++) {
      for (var j = 0; j < employments.length; j++) {
        let employeeInfo = employments[j].employments
        for (var z = 0; z < employeeInfo.length; z++) {
          if (employeeInfo[z].company_id === companies[i].id) {
            console.log('NAME!!!!!',companies[i].name);
          }
        }
      }
    }

    // var employmentId = employments.map(function (num,index) {
    //   return employments[index];
    // })
    //
    // console.log(employments);
  };
