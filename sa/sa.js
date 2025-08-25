const cardValue = {
  title: "iPhone17",
  price: 15000,
  description: "some good phone",
  imgUrl= https://www.google.com/url?sa=i&url=https%3A%2F%2Fzeerawireless.com%2Fde%2Fblogs%2Fnews%2Fshould-you-wait-for-iphone-17-pro-max-or-buy-the-16-pro-max-now-10-key-points-to-consider%3Fsrsltid%3DAfmBOorBeVdTnBZeYC9b2WmI-rUpyd-6BQm2dtz2xC83W6qIfOxUSmgF&psig=AOvVaw1PFYaVj-jOfgHlOpKam0C_&ust=1756182788476000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJCgo5GRpY8DFQAAAAAdAAAAABAE;
};

const cardDiv = document.createElement("div");
cardDiv.setAttribute("class", "card");
const h2Title = document.createElement("h2");
h2Title.innerText = cardValue.title;
const pDesk = document.createElement("p");
pDesk.innerText = cardValue.description;
const priceDesk = document.createElement("p");
priceDesk.innerText = cardValue.price;
cardDiv.appendChild(h2Title);
cardDiv.appendChild(pDesk);
cardDiv.appendChild(priceDesk);
document.getElementById("app").appendChild(cardDiv);

//const appleCard = document.createElement("div");
//appleCard.setAttribute("class", "apple");
//const namer = document.createElement("h2");
//namer.innerText = "iPhone X";
//const price = document.createElement("p");
//price.innerText = "price = 10$";
//const description = document.createElement("p");
//description.innerText = "Very old phone";
//appleCard.appendChild(namer);
//appleCard.appendChild(price);
//appleCard.appendChild(description);
//document.getElementById("apple").appendChild(appleCard);
