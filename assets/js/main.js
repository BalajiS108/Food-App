const restaurantData = [
  {
    id: 1,
    rName: "Maharashtrian Thali",
    rDetails: "North Indian,Chinese, Beverages,Snackes",
    rating: 4.4,
    dTime: 44,
    price: 200,
    proOff: "Pro extra 25% OFF",
    standardOff: "50% OFF up to 100",
    src: "https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg?output-format=webp",
    promoted: "Promoted",
  },
  {
    id: 2,
    rName: "Maharashtrian Thali",
    rDetails: "North Indian,Chinese, Beverages,Snackes",
    rating: 4.4,
    dTime: 44,
    price: 200,
    proOff: "Pro extra 25% OFF",
    standardOff: "50% OFF up to 100",
    src: "https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg?output-format=webp",
    promoted: "Promoted",
  },
  {
    id: 3,
    rName: "Maharashtrian Thali",
    rDetails: "North Indian,Chinese, Beverages,Snackes",
    rating: 4.4,
    dTime: 44,
    price: 200,
    proOff: "Pro extra 25% OFF",
    standardOff: "50% OFF up to 100",
    src: "https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg?output-format=webp",
    promoted: "Promoted",
  },
  {
    id: 4,
    rName: "Maharashtrian Thali",
    rDetails: "North Indian,Chinese, Beverages,Snackes",
    rating: 4.4,
    dTime: 44,
    price: 200,
    proOff: "Pro extra 25% OFF",
    standardOff: "50% OFF up to 100",
    src: "https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg?output-format=webp",
    promoted: "Promoted",
  },
  {
    id: 5,
    rName: "Maharashtrian Thali",
    rDetails: "North Indian,Chinese, Beverages,Snackes",
    rating: 4.4,
    dTime: 44,
    price: 200,
    proOff: "Pro extra 25% OFF",
    standardOff: "50% OFF up to 100",
    src: "https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg?output-format=webp",
    promoted: "Promoted",
  },
  {
    id: 6,
    rName: "Maharashtrian Thali",
    rDetails: "North Indian,Chinese, Beverages,Snackes",
    rating: 4.4,
    dTime: 44,
    price: 200,
    proOff: "Pro extra 25% OFF",
    standardOff: "50% OFF up to 100",
    src: "https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg?output-format=webp",
    promoted: "Promoted",
  },
];

const rList = document.getElementById("main-card-container");
for (let i = 0; i < restaurantData.length; i++) {
  // const{rName}
  // const cardBox=document.createDocumentFragment()
  //   const cardBox = document.createElement("div");
  const cards = document.createElement("div");
  cards.id = "cards";
  //   cardBox.className = "place";

  cards.innerHTML = `
  <div class="image">
  <img
    alt="Restaurant Card"
    src="${restaurantData[i].src}"
    loading="lazy"
    class="sc-s1isp7-5 fyZwWD"
  />
</div>
<div class="promoted">${restaurantData[i].promoted}</div>
<div class="pro-off">${restaurantData[i].proOff}</div>
<div class="standard-off">${restaurantData[i].standardOff}</div>
<div class="d-time">${restaurantData[i].dTime} min</div>
<div class="r-name-ratings">
  <div class="r-name">${restaurantData[i].rName}</div>
  <div class="ratings">
    <div>${restaurantData[i].rating}</div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        width="0.6rem"
        height="0.6rem"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
        class="sc-rbbb40-0 fauQLv"
      >
        <title>star-fill</title>
        <path
          d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
        ></path>
      </svg>
    </div>
  </div>
</div>
<div class="r-details-price">
  <div class="r-details">${restaurantData[i].rDetails}</div>
  <div class="price">
    <span class="material-symbols-outlined" style="font-size: 14px">
      currency_rupee
    </span>
    <div>${restaurantData[i].price} for one </div>
  </div>
</div>
<div class="safe-protocol">
  <div class="incr-img">
    <img
      width="18px"
      height="18px"
      alt="image"
      src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
      loading="lazy"
      class="sc-s1isp7-5 fyZwWD"
    />
  </div>
  <div class="last-msg">5425+ orders placed from here recently</div>
  <div class="safety-img">
    <img
      width="48px"
      height="18px"
      alt="image"
      src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"
      loading="lazy"
      class="sc-s1isp7-5 fyZwWD"
    />
  </div>
</div>`;

  rList.appendChild(cards);
}
