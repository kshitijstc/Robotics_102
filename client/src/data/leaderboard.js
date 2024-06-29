const ldata =[
  // {
  //   name:"Preetam",
  //   course:"Fusion 360",
  //   total:91.68831169,
  // },
];
const sortedData = ldata.sort((a,b)=> b.total-a.total);
export default sortedData;