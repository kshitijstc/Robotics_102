const ldata =[
  {
    name:"Shraddha Nigam",
    course:"IOT",
    total:60,
  },
  {
    name:"Purushottam",
    course:"IOT",
    total:60,
  },
  {
    name:"Gautam Rao",
    course:"IOT",
    total:60,
  },
  {
    name:"Hardik Agarwal",
    course:"OpenCV",
    total:66.6,
  },
  {
    name:"Purushottam",
    course:"OpenCV",
    total:63.6,
  },
  {
    name:"Shikha Sinha",
    course:"OpenCV",
    total:55.2,
  },
  {
    name:"Ananya Dongsarwar",
    course:"Fusion",
    total:48,
  },
  {
    name:"Purushottam",
    course:"Fusion",
    total:45,
  },
  {
    name:"Rehaan Ranjan",
    course:"Fusion",
    total:42,
  },
  {
    name:"Asmit Kumar",
    course:"ROS",
    total:57,
  },
  {
    name:"Purushottam",
    course:"ROS",
    total:30,
  },
  {
    name:"Dhanesh Aravind",
    course:"ROS",
    total:27,
  }
];


const sortedData = ldata.sort((a,b)=> a.course.localeCompare(b.course) || b.total-a.total);
export default sortedData;