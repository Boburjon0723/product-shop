// DOM load bo'lganidan keyin script ishga tushin
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
      console.log("Hamburger bosildi, active:", navbar.classList.contains("active"));
    });
  }

  // Menyu havolasiga bosilganda menu yopilsin
  document.querySelectorAll(".logo1 a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navbar").classList.remove("active");
    });
  });

  // Send to Telegram
  const sendButton = document.getElementById("sendToTelegram");
  if (sendButton) {
    sendButton.addEventListener("click", () => {
      const token = "8361286034:AAGhhavjiXhqDKoOxIcN1WcOx5TfUU_pSH4";
      const chatId = "5655390425";

      const name = document.getElementById("userName").value;
      const phone = document.getElementById("userPhone").number;
      const product = document.getElementById("modalName").textContent;
      const image = document.getElementById("modalImg").src;

      const message = `🛒 Yangi buyurtma!%0A%0A👤 Ism: ${name}%0A📞 Telefon: ${phone}%0A📦 Mahsulot: ${product}`;

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

      fetch(url)
        .then(response => {
          if (response.ok) {
            alert("Xabar yuborildi ✅");
          } else {
            alert("Xabar yuborilmadi ❌");
          }
        })
        .catch(error => alert("Xatolik: " + error));
    });
  }

  // Modal
  const modal = document.getElementById("productModal");
  const closeBtn = document.querySelector(".close");

  window.openModal = function() {
    modal.style.display = "flex";
  }

  if (closeBtn) {
    closeBtn.onclick = () => modal.style.display = "none";
  }
  
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});



// mahsulotlar uchun filter funksiyasi
const buttons = document.querySelectorAll(".categories button");
const products = document.querySelectorAll(".card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    products.forEach(product => {
      if (category === "all" || product.dataset.category === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});


// LocalStorage-dan mahsulotlarni olish
// let productsData = JSON.parse(localStorage.getItem("card")) || [];

// // Sahifaga chiqarish funksiyasi
// function renderProducts(list) {
//   const container = document.querySelector(".container");
//   container.innerHTML = "";

//   list.forEach(item => {
//     const div = document.createElement("div");
//     div.classList.add("card");
//     div.dataset.category = item.category;
//     div.textContent = item.name;
//     container.appendChild(div);
//   });
// }

// renderProducts(productsData);

// // Filtrlash
// const buttons = document.querySelectorAll(".categories button");

// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const category = btn.dataset.category;

//     if (category === "all") {
//       renderProducts(productsData);
//     } else {
//       const filtered = productsData.filter(el => el.category === category);
//       renderProducts(filtered);
//     }
//   });
// });


// let productsData = JSON.parse(localStorage.getItem("card")) || [];

// const container = document.querySelector(".container");

// function renderProducts(list) {
//   container.innerHTML = "";

//   list.forEach(item => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.dataset.category = item.category;

//     card.innerHTML = `
//       <img src="${item.image}" style="width:150px; height:150px; object-fit:cover;">
//       <h3>${item.name}</h3>
//       <p>${item.price} so'm</p>
//       <button class="delete-btn" data-id="${item.id}">O'chirish</button>
//     `;

//     container.appendChild(card);
//   });

//   addDeleteEvents();
// }
// renderProducts(productsData);

// function addDeleteEvents() {
//   const deleteButtons = document.querySelectorAll(".delete-btn");

//   deleteButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const id = btn.dataset.id;

//       productsData = productsData.filter(product => product.id != id);

//       localStorage.setItem("card", JSON.stringify(productsData));

//       renderProducts(productsData);
//     });
//   });
// }
// const buttons = document.querySelectorAll(".categories button");

// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const category = btn.dataset.category;

//     if (category === "all") {
//       renderProducts(productsData);
//     } else {
//       const filtered = productsData.filter(item => item.category === category);
//       renderProducts(filtered);
//     }
//   });
// });


// function renderProducts(list) {
//   container.innerHTML = "";

//   list.forEach(item => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.dataset.category = item.category;

//     card.innerHTML = `
//       <img src="${item.image}" style="width:150px; height:150px; object-fit:cover;">
//       <h3>${item.name}</h3>
//       <p>${item.price} so'm</p>
//       <button class="delete-btn" data-id="${item.id}">O'chirish</button>
//     `;

//     container.appendChild(card);
//   });

//   addDeleteEvents();
// }
