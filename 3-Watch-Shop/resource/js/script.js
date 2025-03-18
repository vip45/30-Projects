$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".custon-faq-question").click(function () {
    $(".custom-faq-answer").addClass("d-none").fadeOut(200);

    let answer = $(this).next(".custom-faq-answer");
    answer.removeClass("d-none").fadeIn(300);
  });

  // slick slider
  $(".watch-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    fade: true,
    adaptiveHeight: true,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
  });
});

const watches = [
  {
    name: "Zoro Mindsweep G",
    image: "resource/images/watch1.svg",
    price: 12000,
  },
  {
    name: "Romeleu Authentic",
    image: "resource/images/watch2.png",
    price: 20000,
  },
  {
    name: "Sierra Large Dial",
    image: "resource/images/watch3.png",
    price: 18000,
  },
  {
    name: "Zoro Mindsweep G",
    image: "resource/images/watch1.svg",
    price: 12000,
  },
  {
    name: "Romeleu Authentic",
    image: "resource/images/watch2.png",
    price: 20000,
  },
  {
    name: "Sierra Large Dial",
    image: "resource/images/watch3.png",
    price: 18000,
  },
  {
    name: "Zoro Mindsweep G",
    image: "resource/images/watch1.svg",
    price: 12000,
  },
  {
    name: "Romeleu Authentic",
    image: "resource/images/watch2.png",
    price: 20000,
  },
  {
    name: "Sierra Large Dial",
    image: "resource/images/watch3.png",
    price: 18000,
  },
];

const container = document.getElementById("products-container");

watches.forEach((watch, index) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <div class="prod-img"><img src="${watch.image}" alt="${watch.name}" /></div>
    <div>
        <p class="product-name">${watch.name}</p>
        <div class="product-price">₹ ${watch.price}</div>
        <div class="product-book-now" data-index="${index}">BOOK NOW</div>
    </div>
    `;

  container.appendChild(card);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("product-book-now")) {
    let index = event.target.getAttribute("data-index");
    let watch = watches[index];

    // Redirect to Book Now page with URL parameters
    window.location.href = `book-now.html?name=${encodeURIComponent(
      watch.name
    )}&image=${encodeURIComponent(watch.image)}&price=${encodeURIComponent(
      watch.price
    )}`;
  }
});

const urlParams = new URLSearchParams(window.location.search);
const watchName = urlParams.get("name");
const watchImage = urlParams.get("image");
const watchPrice = urlParams.get("price");

// Step 3.2: Display watch details
if (watchName && watchImage && watchPrice) {
  document.getElementById("watch-name").textContent =
    decodeURIComponent(watchName);
  document.getElementById("watch-image").src = decodeURIComponent(watchImage);
  document.getElementById("watch-price").textContent =
    "Price: ₹ " + decodeURIComponent(watchPrice);
} else {
  document.getElementById("watch-name").textContent = "No Watch Selected";
}
