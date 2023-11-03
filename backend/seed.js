import bcrypt from "bcryptjs";
import seeder from "mongoose-seed";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

seeder.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Banner",
      "./models/Category",
      "./models/Image",
      "./models/Product",
      "./models/Trending",
      "./models/User",
    ]);

    // Clear specified collections
    seeder.clearModels(
      ["Banner", "Category", "Image", "Product", "Trending", "User"],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

const data = [
  {
    model: "User",
    documents: [
      {
        _id: mongoose.Types.ObjectId("61d1bf7ba54db7727c2c939f"),
        isAdmin: true,
        name: "Rima",
        isVerified: true,
        email: "rimameih@gmail.com",
        password: bcrypt.hashSync("1234", 8),
      },
      {
        _id: mongoose.Types.ObjectId("61d1bf7ba54db7727c2c93a0"),
        name: "Fifi",
        username: "fifi123",
        email: "fifi123@gmail.com",
        password: bcrypt.hashSync("1234", 8),
        isAdmin: false,
        isVerified: true,
      },
    ],
  },
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb0"),
        name: "Pakaian Wanita",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb1"),
        name: "Pakaian Pria",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb2"),
        name: "Pest Control",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb3"),
        name: "Elektronik",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb4"),
        name: "Peralatan Rumah Tangga",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb5"),
        name: "Makanan dan Minuman",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb6"),
        name: "Handphone",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb7"),
        name: "Aksesoris Handphone",
      },
      {
        _id: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb8"),
        name: "CD & DVD Musik",
      },
    ],
  },
  {
    model: "Image",
    documents: [
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b0"),
        imageUrl: "/images/matcha-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b1"),
        imageUrl: "/images/matcha-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b2"),
        imageUrl: "/images/matcha-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b3"),
        imageUrl: "/images/matcha-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b4"),
        imageUrl: "/images/jete-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b5"),
        imageUrl: "/images/jete-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b6"),
        imageUrl: "/images/jete-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b7"),
        imageUrl: "/images/jete-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b8"),
        imageUrl: "/images/lipton-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b9"),
        imageUrl: "/images/lipton-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93ba"),
        imageUrl: "/images/lipton-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bb"),
        imageUrl: "/images/lipton-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bc"),
        imageUrl: "/images/samsung-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bd"),
        imageUrl: "/images/samsung-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93be"),
        imageUrl: "/images/samsung-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bf"),
        imageUrl: "/images/force-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c0"),
        imageUrl: "/images/force-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c1"),
        imageUrl: "/images/force-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c2"),
        imageUrl: "/images/spigen-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c3"),
        imageUrl: "/images/spigen-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c4"),
        imageUrl: "/images/spigen-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c5"),
        imageUrl: "/images/spigen-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c6"),
        imageUrl: "/images/spigen-5.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c7"),
        imageUrl: "/images/tunik-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c8"),
        imageUrl: "/images/tunik-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c9"),
        imageUrl: "/images/tunik-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93ca"),
        imageUrl: "/images/tunik-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cb"),
        imageUrl: "/images/tunik-5.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cc"),
        imageUrl: "/images/tunik-6.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cd"),
        imageUrl: "/images/album-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93ce"),
        imageUrl: "/images/album-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cf"),
        imageUrl: "/images/album-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d0"),
        imageUrl: "/images/celana-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d1"),
        imageUrl: "/images/celana-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d2"),
        imageUrl: "/images/celana-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d3"),
        imageUrl: "/images/celana-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d4"),
        imageUrl: "/images/celana-5.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d5"),
        imageUrl: "/images/nampan-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d6"),
        imageUrl: "/images/nampan-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d7"),
        imageUrl: "/images/nampan-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        imageUrl: "/images/nampan-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d9"),
        imageUrl: "/images/nampan-5.jpg",
      },
    ],
  },
  {
    model: "Product",
    document: [
      {
        _id: mongoose.Types.ObjectId("61d1c38b2829487724f528bd"),
        name: "CY MATCHA POWDER 100% ORIGINAL JAPAN IMPORT GREEN TEA POWDER 100 GR",
        sold: 234,
        stock: 1,
        city: "Jakarta Barat",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb5"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b0"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b1"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b2"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b3"),
        ],
        price: 75000,
        seller: "Teh Bubuk",
        isOfficialStore: false,
        rating: 4.9,
        numReviews: 270,
        description:
          "Culinary matcha This is the matcha you want when you plan on adding anything other than water to it.",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "HEADSET | HEADPHONE | HANDSFREE | EARPHONE GAMING JETE-G1",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bbc"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b4"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b5"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b6"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b7"),
        ],
        price: 258800,
        seller: "JeteIndonesia",
        isOfficialStore: true,
        rating: 4.7,
        numReviews: 1625,
        description:
          "Headset JETE HB2 Series memberikan kualitas suara yang jernih. Suasana mendengarkan musik menjadi lebih hidup. Rasakan sensasi suara HB2 Series yang mampu meredam kebisingan sekitar. ",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 0,
        city: "Jakarta Barat",
        name: "Lipton Ice Tea Mix Lychee 510gr",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb5"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b8"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93b9"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93ba"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bb"),
        ],
        price: 39166,
        seller: "Lipton",
        isOfficialStore: false,
        rating: 4.8,
        numReviews: 637,
        description:
          "Rasa yang menyegarkan untuk hari yang cerah. Ahli Mixologi kami telah membuat campuran yang tepat dari Lipton Iced tea Mix untuk membuat es teh leci yang paling menyegarkan untuk membantu Anda memuaskan dahaga tamu Anda.",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "SAMSUNG GALAXY A72 8/128 DAN 8/256 2021 GARANSI RESMI SEGEL BNIB - Putih 128GB",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bbc"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bc"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bd"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93be"),
        ],
        price: 5798000,
        seller: "Samudera Sports",
        isOfficialStore: false,
        rating: 4.9,
        numReviews: 125,
        description:
          "GARANSI RESMI SEIN SAMSUNG INDONESIA 1 Tahun. Kartu Garansi ada di salah satu halaman buku panduan singkat.",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "Force Magic Lemon Pop Art 600 ml - Paket Hemat Isi 2",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bbb"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93bf"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c0"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c1"),
        ],
        price: 50000,
        seller: "Enesis Official Store",
        isOfficialStore: true,
        rating: 4.9,
        numReviews: 1300,
        description:
          "Force Magic adalah produk obat nyamuk semprot (aerosol) dengan bahan aktif synthetic pyrethroids (prallethrin & permethrin).",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "Anti Gores Hydrogel Spigen Samsung Galaxy S21 Ultra Plus Neo Flex - S21 Ultra",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bc0"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c2"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c3"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c4"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c5"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c6"),
        ],
        price: 233752,
        seller: "Spigen Official",
        isOfficialStore: true,
        rating: 4.9,
        numReviews: 101,
        description:
          "pigen NeoFlex Solid screen protector yang dapat melindungi layar handphone hingga sisi edge, dengan sistem Wet Installation yakni dengan menggunakan semprotan air untuk memastikan menempel secara penuh dan bebas gelembung pada permukaan layar.",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "Wulfi Day to Day Kemeja Tunik Toyobo Fenomenal White - L",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb0"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c7"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c8"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93c9"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93ca"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cb"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cc"),
        ],
        price: 98000,
        seller: "Wulfi",
        isOfficialStore: true,
        rating: 4.9,
        numReviews: 152,
        description:
          "Kemeja Tunik fenomenal tersedia ukuran XS-S-M-L-XL-XXL. Setiap pembelanjaan dapet Bros. Bros BISA DILEPAS. Bros dapat berubah model sesuai persediaan. Nyaman dipakai untuk sehari-hari ataupun kantor. Bisa untuk BUSUI. Bahan Toyobo Fodu Premium halus dan adem.",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "GFRIEND ALBUM -回: LABYRINTH",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bb8"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cd"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93ce"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93cf"),
        ],
        price: 275000,
        seller: "Dharu Elfshop",
        isOfficialStore: false,
        rating: 4.9,
        numReviews: 46,
        description:
          "Isi album/ligshtick/produk Import lainnya diluar tanggung jawab penjual karna barang import dari korea, dikirim ke customer dalam keadaan sealed/segel.",
      },
      {
        _id: mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "CELANA PANJANG LEVIS JEANS SLIM FIT DENIM PENSIL PRIA LAKI-LAKI - A.Hitam Pekat, 27",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bba"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d0"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d1"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d2"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d3"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d4"),
        ],
        price: 79999,
        seller: "MG Store 1990",
        isOfficialStore: false,
        rating: 4.9,
        numReviews: 768,
        description:
          "Celana Panjang Pria Jeans Levis Denim Strecth / Garment Street.",
      },
      {
        sold: 234,
        stock: 120,
        city: "Jakarta Barat",
        name: "Nampan tray baki kayu putih kotak murah bagus awet kuat persegi",
        categoryId: mongoose.Types.ObjectId("61d1c05c03f9f473db022bbd"),
        imageId: [
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d5"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d6"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d7"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d8"),
          mongoose.Types.ObjectId("61d1bfe5a54db7727c2c93d9"),
        ],
        price: 33150,
        seller: "Mendekor",
        isOfficialStore: false,
        rating: 4.8,
        numReviews: 46,
        description:
          "Kotak/nampan kayu multifungsi yang dapat digunakan untuk menyimpan berbagai benda agar ruangan kamu lebih terorganisir.",
      },
    ],
  },
];
