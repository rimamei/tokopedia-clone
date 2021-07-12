import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Rima",
      username: "rima123",
      email: "rimameih@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      verification: true
    },
    {
      name: "Fifi",
      username: "fifi123",
      email: "fifi123@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
      verification: true
    },
  ],
  banner: [
    {
  imageUrl: "/images/Banner/Banner-1.jpg",
    },
    {
  imageUrl: "/images/Banner/Banner-2.jpg",
    },
    {
  imageUrl: "/images/Banner/Banner-3.jpg",
    },
    {
  imageUrl: "/images/Banner/Banner-4.jpg",
    },
    {
  imageUrl: "/images/Banner/Banner-5.jpg",
    },
  ],
  trending: [
    {
      number: 1,
      keyword: "Toko Rima",
      isUp: true,
      gap: 234,
    },
    {
      number: 2,
      keyword: "Permen",
      isUp: false,
      gap: 1,
    },
    {
      number: 3,
      keyword: "Kopiko",
      isUp: true,
      gap: 1,
    },
    {
      number: 4,
      keyword: "Celana",
      isUp: true,
      gap: 7,
    },
    {
      number: 5,
      keyword: "Celana",
      isUp: true,
      gap: 9,
    },
    {
      number: 6,
      keyword: "Pasmina",
      isUp: false,
      gap: 5,
    },
    {
      number: 7,
      keyword: "Sepatu",
      isUp: false,
      gap: 6,
    },
    {
      number: 8,
      keyword: "Jilbab segi empat",
      isUp: true,
      gap: 9,
    },
    {
      number: 9,
      keyword: "handphone",
      isUp: false,
      gap: 2,
    },
    {
      number: 10,
      keyword: "lenovo",
      isUp: true,
      gap: 21,
    },
  ],
  images: [
    {
  imageUrl: "/images/matcha-1.jpg",
    },
    {
  imageUrl: "/images/matcha-2.jpg",
    },
    {
  imageUrl: "/images/matcha-3.jpg",
    },
    {
  imageUrl: "/images/matcha-4.jpg",
    },
    {
  imageUrl: "/images/jete-1.jpg",
    },
    {
  imageUrl: "/images/jete-2.jpg",
    },
    {
  imageUrl: "/images/jete-3.jpg",
    },
    {
  imageUrl: "/images/jete-4.jpg",
    },
    {
  imageUrl: "/images/lipton-1.jpg",
    },
    {
  imageUrl: "/images/lipton-2.jpg",
    },
    {
      imageUrl: "/images/lipton-3.jpg",
    },
    {
      imageUrl: "/images/lipton-4.jpg",
    },
    {
      imageUrl: "/images/samsung-1.jpg",
    },
    {
      imageUrl: "/images/samsung-2.jpg",
    },
    {
      imageUrl: "/images/samsung-3.jpg",
    },
    {
      imageUrl: "/images/force-1.jpg",
    },
    {
      imageUrl: "/images/force-2.jpg",
    },
    {
      imageUrl: "/images/force-3.jpg",
    },
    {
      imageUrl: "/images/spigen-1.jpg",
    },
    {
      imageUrl: "/images/spigen-2.jpg",
    },
    {
      imageUrl: "/images/spigen-3.jpg",
    },
    {
      imageUrl: "/images/spigen-4.jpg",
    },
    {
      imageUrl: "/images/spigen-5.jpg",
    },
    {
      imageUrl: "/images/tunik-1.jpg",
    },
    {
      imageUrl: "/images/tunik-2.jpg",
    },
    {
      imageUrl: "/images/tunik-3.jpg",
    },
    {
      imageUrl: "/images/tunik-4.jpg",
    },
    {
      imageUrl: "/images/tunik-5.jpg",
    },
    {
      imageUrl: "/images/tunik-6.jpg",
    },
    {
      imageUrl: "/images/album-1.jpg",
    },
    {
      imageUrl: "/images/album-2.jpg",
    },
    {
      imageUrl: "/images/album-3.jpg",
    },
    {
      imageUrl: "/images/celana-1.jpg",
    },
    {
      imageUrl: "/images/celana-2.jpg",
    },
    {
      imageUrl: "/images/celana-3.jpg",
    },
    {
      imageUrl: "/images/celana-4.jpg",
    },
    {
      imageUrl: "/images/celana-5.jpg",
    },
    {
      imageUrl: "/images/nampan-1.jpg",
    },
    {
      imageUrl: "/images/nampan-2.jpg",
    },
    {
      imageUrl: "/images/nampan-3.jpg",
    },
    {
      imageUrl: "/images/nampan-4.jpg",
    },
    {
      imageUrl: "/images/nampan-5.jpg",
    },
  ],
  categories: [
    {
      name: "Pakaian Wanita"
    },
    {
      name: "Pakaian Pria"
    },
    {
      name: "Pest Control"
    },
    {
      name: "Elektronik"
    },
    {
      name: "Peralatan Rumah Tangga"
    },
    {
      name: "Makanan dan Minuman"
    },
    {
      name: "Handphone"
    },
    {
      name: "Aksesoris Handphone"
    },
    {
      name: "CD & DVD Musik"
    },
  ],
  products: [
    {
      name: "CY MATCHA POWDER 100% ORIGINAL JAPAN IMPORT GREEN TEA POWDER 100 GR",
      sold: 234,
      stock: 1,
      city: "Jakarta Barat",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf55e",
        // name: "Makanan dan Minuman",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e1c",
          // imageUrl: "/images/matcha-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e1d",
          // imageUrl: "/images/matcha-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e1e",
          // imageUrl: "/images/matcha-3.jpg",
        },
        {
          _id: "60bedd85833b872490c09e1f",
          // imageUrl: "/images/matcha-4.jpg",
        },
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
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "HEADSET | HEADPHONE | HANDSFREE | EARPHONE GAMING JETE-G1",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf55c",
        // name: "Elektronik",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e20",
          // imageUrl: "/images/jete-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e21",
          // imageUrl: "/images/jete-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e22",
          // imageUrl: "/images/jete-3.jpg",
        },
        {
          _id: "60bedd85833b872490c09e23",
          // imageUrl: "/images/jete-4.jpg",
        },
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
      sold: 234,
      stock: 0,
      city: "Jakarta Barat",
      name: "Lipton Ice Tea Mix Lychee 510gr",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf55e",
        // name: "Makanan dan Minuman",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e24",
          // imageUrl: "/images/lipton-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e25",
          // imageUrl: "/images/lipton-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e26",
          // imageUrl: "/images/lipton-3.jpg",
        },
        {
          _id: "60bedd85833b872490c09e27",
          // imageUrl: "/images/lipton-4.jpg",
        },
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
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "SAMSUNG GALAXY A72 8/128 DAN 8/256 2021 GARANSI RESMI SEGEL BNIB - Putih 128GB",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf55c",
        // name: "Elektronik",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e28",
          // imageUrl: "/images/samsung-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e29",
          // imageUrl: "/images/samsung-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e2a",
          // imageUrl: "/images/samsung-3.jpg",
        },
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
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "Force Magic Lemon Pop Art 600 ml - Paket Hemat Isi 2",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf55b",
        // name: "Pest Control",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e2b",
          // imageUrl: "/images/force-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e2c",
          // imageUrl: "/images/force-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e2d",
          // imageUrl: "/images/force-3.jpg",
        },
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
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "Anti Gores Hydrogel Spigen Samsung Galaxy S21 Ultra Plus Neo Flex - S21 Ultra",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf560",
        // name: "Aksesoris Handphone",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e2e",
          // imageUrl: "/images/spigen-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e2f",
          // imageUrl: "/images/spigen-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e30",
          // imageUrl: "/images/spigen-3.jpg",
        },
        {
          _id: "60bedd85833b872490c09e31",
          // imageUrl: "/images/spigen-4.jpg",
        },
        {
          _id: "60bedd85833b872490c09e32",
          // imageUrl: "/images/spigen-5.jpg",
        },
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
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "Wulfi Day to Day Kemeja Tunik Toyobo Fenomenal White - L",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf559",
        // name: "Pakaian Wanita",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e33",
          // imageUrl: "/images/tunik-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e34",
          // imageUrl: "/images/tunik-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e35",
          // imageUrl: "/images/tunik-3.jpg",
        },
        {
          _id: "60bedd85833b872490c09e36",
          // imageUrl: "/images/tunik-4.jpg",
        },
        {
          _id: "60bedd85833b872490c09e37",
          // imageUrl: "/images/tunik-5.jpg",
        },
        {
          _id: "60bedd85833b872490c09e38",
          // imageUrl: "/images/tunik-6.jpg",
        },
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
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "GFRIEND ALBUM -回: LABYRINTH",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf561",
        // name: "CD & DVD Musik"
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e39",
          // imageUrl: "/images/album-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e3a",
          // imageUrl: "/images/album-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e3b",
          // imageUrl: "/images/album-3.jpg",
        },
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
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "CELANA PANJANG LEVIS JEANS SLIM FIT DENIM PENSIL PRIA LAKI-LAKI - A.Hitam Pekat, 27",
      categoryId: {
        _id: "60c1d016b95fbf243c9cf55a",
        // name: "Pakaian Pria",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e3c",
          // imageUrl: "/images/celana-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e3d",
          // imageUrl: "/images/celana-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e3e",
          // imageUrl: "/images/celana-3.jpg",
        },
        {
          _id: "60bedd85833b872490c09e3f",
          // imageUrl: "/images/celana-4.jpg",
        },
        {
          _id: "60bedd85833b872490c09e40",
          // imageUrl: "/images/celana-5.jpg",
        },
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
      categoryId: {
        _id: "60c1d016b95fbf243c9cf55d",
        // name: "Peralatan Rumah Tangga",
      },
      imageId: [
        {
          _id: "60bedd85833b872490c09e41",
          // imageUrl: "/images/nampan-1.jpg",
        },
        {
          _id: "60bedd85833b872490c09e42",
          // imageUrl: "/images/nampan-2.jpg",
        },
        {
          _id: "60bedd85833b872490c09e43",
          // imageUrl: "/images/nampan-3.jpg",
        },
        {
          _id: "60bedd85833b872490c09e44",
          // imageUrl: "/images/nampan-4.jpg",
        },
        {
          _id: "60bedd85833b872490c09e45",
          // imageUrl: "/images/nampan-5.jpg",
        },
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
};

export default data;
