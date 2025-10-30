document.getElementById("sendToTelegram").addEventListener("click", () => {
  const token = "7576353277:AAEaeYsp0IAcOkTiUgmgDbWjSDKIuZj-knE";
  const chatId = "5655390425";

  const name = document.getElementById("userName").value;
  const phone = document.getElementById("userPhone").value;
  const product = document.getElementById("modalName").textContent;

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
const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close");

function openModal() {
  modal.style.display = "flex";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
