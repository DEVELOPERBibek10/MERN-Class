const tableBody = document.querySelector("tbody");

const students = [
  {
    name: "Aarav Sharma",
    grade: 10,
    address: "Kathmandu, Nepal",
    contactNumber: 9800000000,
    gender: "Male",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sita Thapa",
    grade: 9,
    address: "Lalitpur, Nepal",
    contactNumber: 9800000000,
    gender: "Female",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Ramesh Karki",
    grade: 11,
    address: "Bhaktapur, Nepal",
    contactNumber: 9800000000,
    gender: "Male",
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Anisha Gurung",
    grade: 8,
    address: "Pokhara, Nepal",
    contactNumber: 9800000000,
    gender: "Female",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Bikash Rai",
    grade: 12,
    address: "Dharan, Nepal",
    contactNumber: 9800000000,
    gender: "Male",
    img: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Nisha Tamang",
    grade: 10,
    address: "Butwal, Nepal",
    contactNumber: 9800000000,
    gender: "Male",
    img: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Kiran Magar",
    grade: 11,
    address: "Hetauda, Nepal",
    contactNumber: 9800000000,
    gender: "Male",
    img: "https://images.unsplash.com/photo-1607859978282-3a5aaa41978a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Puja Basnet",
    grade: 9,
    address: "Biratnagar, Nepal",
    contactNumber: 9800000000,
    gender: "Female",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sunil Khadka",
    grade: 9,
    address: "Chitwan, Nepal",
    contactNumber: 9800000000,
    gender: "Male",
    img: "https://plus.unsplash.com/premium_photo-1727967189498-fb2c7d0a1e30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Manisha Bhandari",
    grade: 8,
    address: "Janakpur, Nepal",
    contactNumber: 9800000000,
    gender: "Female",
    img: "https://plus.unsplash.com/premium_photo-1694618623649-51733e6001fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
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

let idCards = students
  .map(function (card) {
    return `
   <div class="shadow-lg w-[320px] h-[420px] rounded-xl relative mt-2">
                <div id="heading" class=" relative mt-2">
                    <h4 class="text-center font-semibold text-xl">Student's Identity Card</h4>
                </div>
                <div id="img-container" class="w-[120px] h-[135px] bg-white mx-auto mt-10">
                    <img src= ${
                      card.img
                        ? typeof card.img === "string"
                          ? card.img
                          : ""
                        : ""
                    }
                        alt="" class="w-full h-full object-center object-cover">
                </div>
                <div id="details" class="p-5 mx-auto px-12 py-10 flex flex-col justify-center h-[50%]">
                    <p id="Name"> <span>Name</span> : <span>${
                      card.name
                        ? typeof card.name === "string"
                          ? card.name
                          : "Invalid Name"
                        : "N/A"
                    }</span></p>
                    <p id="Name"> <span>Grade</span> : <span>${
                      card.grade
                        ? typeof card.grade === "number"
                          ? card.grade
                          : "Invalid grade"
                        : "N/A"
                    }</span></p>
                    <p id="Name"> <span>Gender</span> : <span>${
                      card.gender
                    }</span></p>
                    <p id="Name"> <span>Address</span> : <span>${
                      card.address
                    }</span></p>
                    <p id="Name"> <span>Contact</span> : <span>${
                      card.contactNumber
                    }</span></p>
                </div>
                </div>
  `;
  })
  .join("");

document.querySelector("#card-container").innerHTML = idCards;
