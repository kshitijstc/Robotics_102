const ldata =[
//   {
//     name:"Preetam",
//     course:"Fusion",
//     total:91.69,
//   },
//   {
//     name:"Krishna",
//     course:"ROS",
//     total:9,
//   },
//   {
//     name:"Krishna",
//     course:"ROS",
//     total:89,
//   },
//   {
//     name:"Preetam",
//     course:"OpenCV",
//     total:91.69,
//   },
//   {
//     name:"Krishna",
//     course:"IOT",
//     total:89,
//   },
//   {
//     name:"Kshitij",
//     course:"IOT",
//     total:70,
//   },
];


const sortedData = ldata.sort((a,b)=> b.course.localeCompare(a.course) || b.total-a.total);
export default sortedData;