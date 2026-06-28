export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body;

  // هنا ستضع المنطق البرمجي للاتصال بإنستغرام
  // أو استدعاء الوظيفة الموجودة داخل instgarm.js

  return res.status(200).json({
    ok: true,
    message: "تم استقبال البيانات بنجاح",
    debug_user: username
  });
}
