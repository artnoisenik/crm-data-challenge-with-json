module.exports.companies = function (rawData) {
    let result = [];

    let people = rawData.people;
    let companies = rawData.companies;
    let employments = people.map(function(num,index){
      return people[index];
    })

    let emplotmentInfo = employments.map(function(num, index) {
      return employments[index].employments;
    })


    for (let i = 0; i < companies.length; i++) {
      let goodStuff = new Object();
      let peopleArr = [];
      goodStuff.name = companies[i].name;
      goodStuff.employees = peopleArr;

      for (var j = 0; j < employments.length; j++) {
        let employeeInfo = employments[j].employments

        for (var z = 0; z < employeeInfo.length; z++) {
          if (employeeInfo[z].company_id === companies[i].id) {
            let peopleStuff = new Object();
            peopleStuff.id = employments[j].id;
            peopleStuff.first_name = employments[j].first_name;
            peopleStuff.last_name = employments[j].last_name;
            peopleStuff.title = employeeInfo[z].title;
            peopleArr.push(peopleStuff);
          }
        }
      }
      result.push(goodStuff);
    }
    return result;
  };

  module.exports.employments = function (rawData) {

    let result = [];

    let people = rawData.people;
    let companies = rawData.companies;
    let employees = people.map(function(num,index){
      return people[index];
    })

    for (let i = 0; i < companies.length; i++) {

      for (var j = 0; j < employees.length; j++) {

        let employeeInfo = employees[j].employments

        for (var z = 0; z < employeeInfo.length; z++) {

          let goodStuff = new Object();
          if (employeeInfo[z].company_id === companies[i].id) {

            goodStuff.company_id = companies[i].id;
            goodStuff.company_name = companies[i].name;
            goodStuff.person_id = employees[j].id;
            goodStuff.person_first_name = employees[j].first_name;
            goodStuff.person_last_name = employees[j].last_name;
            goodStuff.title = employeeInfo[z].title;
            result.push(goodStuff);
          }
        }
      }
    }
    return result;
  }

  module.exports.peopleWithoutEmployments = function (rawData) {
    let result = [];

    let people = rawData.people;

    for (var i = 0; i < people.length; i++) {
      let goodStuff = new Object();
      if (!people[i].employments.length) {
        goodStuff.id = people[i].id;
        goodStuff.first_name = people[i].first_name;
        goodStuff.last_name = people[i].last_name;
        result.push(goodStuff);
      }
    }
    return result;
  }
