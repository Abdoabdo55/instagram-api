export default async function handler(req, res) {
  // التأكد من أن الطلب هو POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // استقبال البيانات المرسلة من التطبيق
  const { username, password } = req.body;

  // هنا ستضيف لاحقاً كود الاتصال بإنستغرام
  console.log("تم استلام طلب جديد:", username, password);

  return res.status(200).json({
    ok: true,
    message: "تم استلام البيانات بنجاح"
  });
}
