
const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'pepi',
        profession: 'zapatero',
        yrsExperience: 4.5
      }
  ];
  
  // Totaling a specific object property
  
  //let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience,0);
  //console.log(totalExperience)
  
  // Grouping by a property, and totaling it too

  let expByProf = teamMembers.reduce((acc, curr) => {
    let key =curr.profession;
    if (!acc[key]){
        acc[key]=curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    } 
    return acc;
  },{});
  console.log(expByProf);

  let namesByProf = teamMembers.reduce((acc, curr) => {
    let key =curr.profession;
    if (!acc[key]){
        acc[key]=curr.name;
    } else {
        acc[key] += curr.name;
    } 
    return acc;
  },{});
  console.log(namesByProf);

  //
  const nums = [0,1,2,3,4];
// 1 line function, reduce takes 2 parameters, 1 to accumulate and 
//second the current that will be accumulate, number at the end is optional 
//to give a point of start to the function

//  let sum= nums.reduce((accumule, current)=> accumule + current, 10);
//  console.log(sum);

