
let loveCount = 0;
let coinCount = 100; 
let copyCount = 0;

const loveBtn = document.getElementById("loveBtn");
  const coinBtn = document.getElementById("coinBtn");
   const copyBtnMain = document.getElementById("copyBtnMain");
const copyCountSpan = document.getElementById("copyCount");


loveBtn.innerHTML = `<span id="loveCount" class="mr-2 font-bold">${loveCount}</span>
<img src="assets/hearts.png" class="w-[30px] h-[30px]" alt="">`;
coinBtn.innerHTML = `<span id="coinCount" class="mr-2 font-bold">${coinCount}</span>
<img src="assets/coin.png" class="w-[24px] h-[24px]" alt="">`;

function updateNavbar() 
{
  document.getElementById("loveCount").innerText = loveCount;
  document.getElementById("coinCount").innerText = coinCount;
  copyCountSpan.innerText = copyCount;
}


    document.querySelectorAll(".full_card").forEach(card => {
  const heartBtn = card.querySelector(".card_icon button");
  const copyBtn = card.querySelector(".card_button button:first-child");
  const callBtn = card.querySelector(".card_button button:last-child");

  const serviceName = card.querySelector("h3").innerText;
  const number = card.querySelector("h1").innerText;

  heartBtn.addEventListener("click", () => {
    loveCount++;
    updateNavbar();
  });

  copyBtn.addEventListener("click", () => {navigator.clipboard.writeText(number).then(() => {
      alert(`${number} কপি হয়েছে`);
      copyCount++;
      updateNavbar();
    });
  });

  callBtn.addEventListener("click", () => {
    if (coinCount < 20) 
    {
      alert("আপনার পর্যাপ্ত কয়েন নেই কল করার জন্য মিনিমাম ২০ কয়েন লাগবে");
      return;
    }

    coinCount -= 20;
    loveCount--;
    if(loveCount < 0) 
    loveCount = 0;
    updateNavbar();

    alert(`Calling ${serviceName},হটলাইন ${number}`);

  
    const historyList = document.getElementById("historyList");
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();
    li.innerHTML = `${serviceName} ${number}<span style="float:right;">${time}</span>  `;
    historyList.prepend(li);
  });
});

function clearHistory() 
{
  document.getElementById("historyList").innerHTML = "";
}

