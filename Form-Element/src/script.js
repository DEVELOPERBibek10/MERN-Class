const formElement = document.querySelector("form");
const msg = document.getElementById("message");
async function postData(Object) {
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
      Message(true, message);
    }
  } catch (error) {
    let message = `Fetching unsucessful : ${error.message}`;
    Message(false, message);
  }
}

function timeOut() {
  setTimeout(function () {
    msg.innerHTML = "";
  }, 4000);
}

function Message(isSucessful, message) {
  if (isSucessful) {
    msg.textContent = message;
    msg.style.color = "green";
    timeOut();
  } else {
    msg.textContent = message;
    msg.style.color = "red";
    timeOut();
  }
}

formElement.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();

  let formData = new FormData(formElement);
  let ProductInfo = Object.fromEntries(formData.entries());

  if (ProductInfo.price) {
    ProductInfo.price = parseFloat(ProductInfo.price);
  }

  if (
    Object.values(ProductInfo).every((value) => value && String(value).trim())
  ) {
    postData(ProductInfo);
    formElement.reset();
  } else {
    Message(
      false,
      "Please check either the form is empty or incomplete or have inapproprite info"
    );
  }
});
