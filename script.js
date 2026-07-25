// XAU EDGE Dashboard

let trend = document.getElementById("trend");
let signal = document.getElementById("signal");

let trends = ["UPTREND 📈", "DOWNTREND 📉", "SIDEWAYS ➡️"];
let signals = ["BUY 🟢", "SELL 🔴", "WAIT ⏳"];

let randomTrend = trends[Math.floor(Math.random() * trends.length)];
let randomSignal = signals[Math.floor(Math.random() * signals.length)];

trend.innerHTML = randomTrend;
signal.innerHTML = randomSignal;
