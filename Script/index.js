
let loveCount = 0;
let coinCount = 100; //
let copyCount = 0;


const loveBtn = document.getElementById("loveBtn");
const coinBtn = document.getElementById("coinBtn");
const copyBtnMain = document.getElementById("copyBtnMain");
const copyCountSpan = document.getElementById("copyCount");


loveBtn.innerHTML = `<span id="loveCount" class="mr-2 font-bold">${loveCount}</span><img src="assets/hearts.png" class="w-[30px] h-[30px]" alt="">`;
coinBtn.innerHTML = `<span id="coinCount" class="mr-2 font-bold">${coinCount}</span><img src="assets/coin.png" class="w-[24px] h-[24px]" alt="">`;


