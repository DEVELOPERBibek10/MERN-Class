const tableBody = document.querySelector("tbody");

async function UserData() {
  let rawData = await fetch("https://fakestoreapi.com/users");
  let jsonData = await rawData.json();

  let users = jsonData
    .map(function (user) {
      return `
    <tr class="bg-white border-b  border-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            ${
                              user.id
                                ? typeof user.id === "number"
                                  ? user.id
                                  : "Invalid ID"
                                : "N/A"
                            }
                        </th>
                        <td class="px-6 py-4">
                          ${
                            user.username
                              ? typeof user.username === "string"
                                ? user.username
                                : "Invalid Username"
                              : "N/A"
                          }
                        </td>
                        <td class="px-6 py-4">
                            ${
                              user.email
                                ? typeof user.email === "string"
                                  ? user.email
                                  : "Invalid Email"
                                : "N/A"
                            }
                        </td>
                        <td class="px-6 py-4">
                             ${
                               user.phone
                                 ? typeof user.phone === "string"
                                   ? user.phone
                                   : "Invalid Phone"
                                 : "N/A"
                             }
                        </td>
                        <td class="px-6 py-4">
                           ${
                             user.address.city
                               ? typeof user.address.city === "string"
                                 ? user.address.city
                                 : "Invalid Address"
                               : "N/A"
                           }
                        </td>
    </tr>
    `;
    })
    .join("");

  tableBody.insertAdjacentHTML("afterbegin", users);
}

UserData();
