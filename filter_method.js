const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];


  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough)

  const paul = people.filter(people => people.name == 'Paul');
  console.log(paul)

  const paul1 = people.filter(people => people.name == 'Paul')[0];
  console.log(paul1)

  // long version 
  const canditates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
  });
  console.log(canditates)

//condense and elegant version of the previous one 
  const has5yearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(has5yearsExp).length >0;
  const candidatesEleg = students.filter(hasStrongSkills);
  console.log(candidatesEleg);

  const names = candidatesEleg.map(student => [student.name]);
  console.log(names)