const formElement = document.querySelector("form");
const msg = document.getElementById("message");
const tableBody = document.querySelector("tbody");
const formModal = document.getElementById("form-modal");
const addBtn = document.querySelector("#addBtn");

async function postData(Object) {
  if (!Object.id) {
    try {
      let post = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object),
      });

      if (!post.ok) {
        let error = await post.text();
        throw new Error(error);
      } else {
        let message = "Product Submitted sucessfully";
        formElement.reset();
        Message(true, message);
      }
    } catch (error) {
      let message = `Fetching unsucessful : ${error.message}`;
      Message(false, message);
    }
  } else {
    try {
      let post = await fetch(`https://fakestoreapi.com/products/${Object.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object),
      });

      if (!post.ok) {
        let error = await post.text();
        throw new Error(error);
      } else {
        let message = "Product Updated sucessfully";
        formElement.reset();
        Message(true, message);
      }
    } catch (error) {
      let message = error.message;
      Message(false, message);
    }
  }
}

function timeOut() {
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
}

function Message(isSucessful, message) {
  if (isSucessful) {
    msg.innerHTML = message;
    msg.style.color = "green";
    timeOut();
  } else {
    msg.innerHTML = message;
    msg.style.color = "red";
    timeOut();
  }
}

function getFormData(event) {
  if (event.target.type === "submit") event.preventDefault();
  let formData = new FormData(formElement);
  let ProductInfo = Object.fromEntries(formData.entries());

  if (!ProductInfo.id) {
    delete ProductInfo.id;
  } else {
    ProductInfo.id = parseInt(ProductInfo.id);
  }
  if (
    Object.values(ProductInfo).every(
      (value) => value && String(value).trim()
    ) &&
    ProductInfo.price > 0 &&
    isFinite(ProductInfo.price)
  ) {
    postData(ProductInfo);
  } else {
    Message(false, "Please re-check the form details");
  }
}

async function DeleteProduct(id) {
  try {
    let post = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!post.ok) {
      let error = await post.text();
      throw new Error(error);
    } else {
      let message = "Product deleted sucessfully";
      alert(message);
    }
  } catch (error) {
    let message = error.message;
    alert(message);
  }
}

formElement.querySelector("button").addEventListener("click", getFormData);

let allProduct = [];

async function UserData() {
  try {
    let rawData = await fetch("https://fakestoreapi.com/products");
    let jsonData = await rawData.json();
    allProduct = jsonData;
    if (rawData.ok) {
      let Products = jsonData
        .map(function (product) {
          return `
          <tr id=${product.id} class="bg-white border-b  border-gray-200">
                              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                  ${
                                    product.id
                                      ? typeof product.id === "number"
                                        ? product.id
                                        : "Invalid ID"
                                      : "N/A"
                                  }
                              </td>
                              <td class="px-6 py-4 flex gap-3 items-center ">
                              <div class="w-10">
                              <img src = '${
                                product.image
                              }' class="object-center object-cover">
                              </div>
                                ${
                                  product.title
                                    ? typeof product.title === "string"
                                      ? product.title
                                      : "Invalid title"
                                    : "N/A"
                                }
                              </td>
                              <td class="px-6 py-4">
                              <div class="w-fit p-1 bg-gray-300 text-gray-800 rounded-lg whitespace-nowrap">
                              ${
                                product.category
                                  ? typeof product.category === "string"
                                    ? product.category
                                    : "Invalid Catagory"
                                  : "N/A"
                              }
                              </div>
                              </td>
                              <td class="px-6 py-4 flex">
                              <span class="mr-1">$</span>
                                 ${
                                   product.price
                                     ? typeof product.price === "number"
                                       ? product.price
                                       : "Invalid Phone"
                                     : "N/A"
                                 }
                              </td>
                              <td class="px-6 py-4 gap-1 text-center whitespace-nowrap">
                              <span class="mr-1">⭐</span>
                              <span> 
                               ${
                                 product.rating.rate
                                   ? typeof product.rating.rate === "number"
                                     ? product.rating.rate
                                     : "Invalid format"
                                   : "N/A"
                               }
                              </span>
                                
                              </td>
                              <td class=" px-7 py-4 w-[350px] flex gap-5 items-center justify-center">
                              <button type="button" 
                               class="edit py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-green-600 hover:text-green-600 focus:outline-hidden focus:border-green-600 focus:text-green-600 transition-all ease-in duration-300">
                              <i class="ri-pencil-line"></i>Edit
                              </button>
                               <button type="button" onclick=DeleteProduct(${
                                 product.id
                               }) class="delete py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-red-600 hover:text-red-600 focus:outline-hidden focus:border-red-600 focus:text-red-600 transition-all ease-in duration-300">
                             <i class="ri-delete-bin-6-line"></i>Delete
                              </button>
                              </td>
          </tr>
          `;
        })
        .join("");
      tableBody.insertAdjacentHTML("afterbegin", Products);
    } else {
      let errorRes = await rawData.text();
      throw new Error(errorRes);
    }
  } catch (error) {
    Message(false, `Something went wrong: ${error.message}`);
  }
}

UserData();

addBtn.addEventListener("click", function () {
  formModal.classList.replace("opacity-0", "opacity-100");
  Message(false, "");
  formElement.reset();
});

formModal.addEventListener("click", (event) => {
  if (event.target === formModal.firstElementChild) {
    formModal.classList.replace("opacity-100", "opacity-0");
  }
});

function setFormData(product) {
  formModal.classList.replace("opacity-0", "opacity-100");
  Message(false, "");
  for (const key in product) {
    if (key === "rating") {
      continue;
    }
    formElement.elements[key].value = product[key];
  }
}

tableBody.addEventListener("click", function (event) {
  if (event.target.closest(".edit")) {
    Message(false, "");
    const product = allProduct.find(
      (prod) => prod.id === Number(event.target.closest("tr").id)
    );
    setFormData(product);
  }
});
