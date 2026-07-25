// XAU EDGE Dashboard

let trend = document.getElementById("trend");
let signal = document.getElementById("signal");

let trends = ["UPTREND 📈", "DOWNTREND 📉", "SIDEWAYS ➡️"];
let signals = ["BUY 🟢", "SELL 🔴", "WAIT ⏳"];

let randomTrend = trends[Math.floor(Math.random() * trends.length)];
let randomSignal = signals[Math.floor(Math.random() * signals.length)];

trend.innerHTML = randomTrend;
signal.innerHTML = randomSignal;
let entry = document.getElementById("entry");
let stoploss = document.getElementById("stoploss");
let takeprofit = document.getElementById("takeprofit");

entry.innerHTML = "4125.00";
stoploss.innerHTML = "4115.00";
takeprofit.innerHTML = "4145.00";
let confidence = document.getElementById("confidence");
let risk = document.getElementById("risk");

confidence.innerHTML = "85%";
risk.innerHTML = "Low 🟢";
