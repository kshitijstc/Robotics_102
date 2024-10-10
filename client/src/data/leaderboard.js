const ldata =[
  // {
  //   name:"Preetam",
  //   course:"Fusion 360",
  //   total:91.69,
  // },
  // {
  //   name:"Krishna",
  //   course:"ROS",
  //   total:89,
  // }
];
const sortedData = ldata.sort((a,b)=> b.total-a.total);
export default sortedData;