const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
];

export default async function handler(req, res) {
  // استقبال البيانات سواء كانت عبر Body (POST) أو Query (GET)
  const username = req.method === 'POST' ? req.body.username : req.query.username;
  const version = req.method === 'POST' ? req.body.version : req.query.version;

  if (!username) return res.status(400).json({ error: "Username is missing" });

  const currentUA = userAgents[Math.floor(Math.random() * userAgents.length)];

  let generatedPassword = "";
  if (version === 'v3') {
    generatedPassword = `${username}@${Math.floor(Math.random() * 9999)}!`;
  } else if (version === 'v2') {
    generatedPassword = `${username}${new Date().getFullYear()}`;
  } else {
    generatedPassword = `${username}123456`;
  }

  console.log(`[تخفي: ${currentUA}] محاولة تخمين لـ ${username} إصدار ${version} بكلمة ${generatedPassword}`);

  // إرسال الرد للتطبيق
  return res.status(200).json({
    ok: true,
    message: "تم تنفيذ المحاولة بنجاح",
    attempt: generatedPassword
  });
}
