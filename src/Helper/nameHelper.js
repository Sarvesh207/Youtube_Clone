var nameList = [
    "Aarav",
    "Aarti",
    "Abha",
    "Abhay",
    "Abhijit",
    "Aditi",
    "Ajay",
    "Akash",
    "Amit",
    "Amrita",
    "Ananya",
    "Anil",
    "Anita",
    "Anjali",
    "Ankit",
    "Ansh",
    "Anuradha",
    "Aparna",
    "Arjun",
    "Arnav",
    "Arti",
    "Ashok",
    "Ashwini",
    "Avani",
    "Ayush",
    "Bhagat",
    "Bhavana",
    "Bhoomi",
    "Bhupendra",
    "Chandan",
    "Chetan",
    "Darshan",
    "Deepak",
    "Dev",
    "Dhruv",
    "Dipika",
    "Divya",
    "Gaurav",
    "Geeta",
    "Hari",
    "Harsha",
    "Hemant",
    "Ishita",
    "Jagdish",
    "Jai",
    "Jaya",
    "Jayesh",
    "Jyoti",
    "Kamal",
    "Kapil",
    "Kavita",
    "Kiran",
    "Krishna",
    "Lakshmi",
    "Mahesh",
    "Manish",
    "Maya",
    "Mohan",
    "Mukesh",
    "Neha",
    "Nidhi",
    "Nisha",
    "Nitin",
    "Pooja",
    "Prakash",
    "Praveen",
    "Priya",
    "Raj",
    "Rajesh",
    "Rakesh",
    "Rani",
    "Rashmi",
    "Ravi",
    "Rina",
    "Rita",
    "Rohit",
    "Ruchi",
    "Sachin",
    "Sandeep",
    "Sanjay",
    "Sapna",
    "Sarika",
    "Seema",
    "Shalini",
    "Shankar",
    "Shilpa",
    "Shirin",
    "Shraddha",
    "Shreya",
    "Sneha",
    "Sonal",
    "Sonali",
    "Sudhir",
    "Sunil",
    "Sunita",
    "Suresh",
    "Swati",
    "Tanya",
    "Tarun",
    "Uma",
    "Umesh",
    "Vijay",
    "Vinay",
    "Vineet",
    "Yogesh"
    // Add more names as needed...
  ]
  
export function generateName() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}
