exports.companies = function (rawData) {
    var people = rawData.people
    var companies = rawData.companies;

    for (var i = 0; i < people.length; i++) {

      var employments = people[i].employments

      employments.map(function (num, index) {
        if (employments[index].company_id === companies[index].id) {
          console.log('NUM');
        }
      })

    }

  }
