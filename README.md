# Moliyaviy Tranzaktsiyalarni Kuzatish Dasturi

Ushbu loyiha foydalanuvchiga **daromadlar** va **xarajatlarni** boshqarish hamda ularni grafik ko'rinishida kuzatishga yordam beradi.

## Talablar

Loyihani ishga tushirish uchun kompyuteringizda quyidagi dasturlar o'rnatilgan bo'lishi kerak:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## O'rnatish va Ishga Tushirish

Loyihani yuklab olib, ishga tushirish uchun quyidagi amallarni bajaring:

1. **Kodni yuklab olish**  
    Terminal yoki buyruqlar oynasida loyiha fayllarini yuklang:

   ```bash
   git clone https://github.com/OkiljonDadakhanov/finance-dashboard.git
   cd finance-dashboard
   ```

   Kerakli paketlarni o'rnatish
   Loyihani ishga tushirish uchun zarur bo'lgan kutubxonalarni o'rnating:

```bash
npm install
```

Loyihani ishga tushirish
Dastur ishga tushiriladi va lokal serverda ochiladi:

```bash
npm start
```

Brauzeringizda http://localhost:3000 sahifasini ochib dasturdan foydalanishingiz mumkin.

**Eslatma:** Kodga o'zgartirish kiritganingizda sahifa avtomatik tarzda qayta yuklanadi.

## Loyihadan Foydalanish

**Tranzaktsiya qo'shish:**

Yangi daromad yoki xarajatni kiritish uchun miqdor, tavsif va turini tanlang.

**Grafik ko'rinish:**

Daromadlar yashil rangda ko'rsatiladi.
Xarajatlar qizil rangda ko'rsatiladi.
Hisobotlar: Moliyaviy oqimlarni grafik orqali ko'rishingiz mumkin.

**Loyihani Ishlab Chiqishda Foydalanilgan Texnologiyalar:**

React.js – foydalanuvchi interfeyslarini yaratish.
Recharts – ma'lumotlarni grafik ko'rinishida ko'rsatish.
Bootstrap – loyihani dizaynlash uchun.

## Ishlash Jarayoni

**Loyiha ishga tushirilgandan so'ng:**

Tranzaktsiyalar qo'shiladi va grafikda aks ettiriladi.
Ma'lumotlar dinamik ravishda Context API orqali boshqariladi.
Muammolar va Ularning Yechimlari

**Grafikda ranglarni dinamik o'zgartirish:**

Daromadlar uchun yashil, xarajatlar uchun qizil rang belgilandi.

**Tranzaktsiyalarni ulash:**

Context API yordamida ma'lumotlar butun loyiha bo'ylab uzatildi.

**Kelajakdagi Yaxshilanishlar:**

Backend bog'lanishi: Ma'lumotlarni serverda saqlash.

_Yuqoridagi README.md sintaksislar [Github docs](#https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) orqali tayyorlandi._
