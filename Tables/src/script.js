const tableBody = document.querySelector("tbody");

const students = [
  {
    name: "Aarav Sharma",
    grade: "10",
    address: "Kathmandu, Nepal",
    contactNumber: "9801234567",
    gender: "Male",
  },
  {
    name: "Sita Thapa",
    grade: "9",
    address: "Lalitpur, Nepal",
    contactNumber: "9812345678",
    gender: "Female",
  },
  {
    name: "Ramesh Karki",
    grade: "11",
    address: "Bhaktapur, Nepal",
    contactNumber: "9823456789",
    gender: "Male",
  },
  {
    name: "Anisha Gurung",
    grade: "8",
    address: "Pokhara, Nepal",
    contactNumber: "9834567890",
    gender: "Female",
  },
  {
    name: "Bikash Rai",
    grade: "12",
    address: "Dharan, Nepal",
    contactNumber: "9845678901",
    gender: "Male",
  },
  {
    name: "Nisha Tamang",
    grade: "10",
    address: "Butwal, Nepal",
    contactNumber: "9856789012",
    gender: "Male",
  },
  {
    name: "Kiran Magar",
    grade: "11",
    address: "Hetauda, Nepal",
    contactNumber: "9867890123",
    gender: "Male",
  },
  {
    name: "Puja Basnet",
    grade: "9",
    address: "Biratnagar, Nepal",
    contactNumber: "9878901234",
    gender: "Female",
  },
  {
    name: "Sunil Khadka",
    grade: "12",
    address: "Chitwan, Nepal",
    contactNumber: "9889012345",
    gender: "Male",
  },
  {
    name: "Manisha Bhandari",
    grade: "8",
    address: "Janakpur, Nepal",
    contactNumber: "9890123456",
    gender: "Female",
  },
];

let studentDetails = students
  .map(function (detail) {
    return `
<tr>
  <td class="py-4 px-6 border-b border-gray-200">${detail.name}</td>
  <td class="py-4 px-6 border-b border-gray-200 truncate">${detail.grade}</td>
  <td class="py-4 px-6 border-b border-gray-200 truncate">${detail.gender}</td>
  <td class="py-4 px-6 border-b border-gray-200">${detail.address}</td>
  <td class="py-4 px-6 border-b border-gray-200">${detail.contactNumber}</td>
</tr>
    `;
  })
  .join("");

tableBody.insertAdjacentHTML("beforeend", studentDetails);
