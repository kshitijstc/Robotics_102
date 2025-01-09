const ldata =[
  {
    name:"Purushottam",
    course:"IOT",
    total:97,
  },
  {
    name:"Shraddha Nigam",
    course:"IOT",
    total:97,
  },
  
  {
    name:"Manthan kumar Bagade",
    course:"IOT",
    total:96,
  },
  // {
  //   name:"Gautam Rao",
  //   course:"IOT",
  //   total:60,
  // },
  {
    name:"Shikha Sinha",
    course:"OpenCV",
    total:95.2,
  },
  {
    name:"Nidhi Maria Santosh",
    course:"OpenCV",
    total:76.4,
  },
  {
    name:"Hardik Agarwal ",
    course:"OpenCV",
    total:66.6,
  },
  {
    name:"Ananya Dongsarwar",
    course:"Fusion",
    total:84,
  },
  {
    name:"Rehaan Ranjan",
    course:"Fusion",
    total:82,
  },
  {
    name:"Purushottam",
    course:"Fusion",
    total:81,
  },
  {
    name:"Asmit Kumar",
    course:"ROS",
    total:97,
  },
  {
    name:"Purushottam",
    course:"ROS",
    total:92,
  },
  {
    name:"Dhanesh Aravind",
    course:"ROS",
    total:27,
  }
];


const sortedData = ldata.sort((a,b)=> a.course.localeCompare(b.course) || b.total-a.total);
export default sortedData;