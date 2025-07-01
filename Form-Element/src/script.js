const formElement = document.querySelector("form");

async function postData(Object) {
  const errorMsg = document.querySelector("#error-message");
  const sucessMsg = document.querySelector("#sucess-msg");
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
      throw new Error(error || "Unknown Error");
    } else {
      sucessMsg.textContent = `Product added sucessfully`;
      sucessMsg.style.color = "green";
    }
  } catch (error) {
    let message = `Fetching unsucessful : ${error.message}`;
    errorMsg.textContent = message;
    errorMsg.style.color = "red";
  }
}

formElement.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  let title = formElement.querySelector("#title").value;
  let price = Number(formElement.querySelector("#price").value);
  let category = formElement.querySelector("#category").value;
  let description = formElement.querySelector("#description").value;

  let Object = {
    id: Date.now(),
    title: title,
    price: price,
    description: description,
    category: category,
    image: "https://example.com",
  };
  formElement.reset();
  postData(Object);
});
