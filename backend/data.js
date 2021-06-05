import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Rima",
      email: "rimameih@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Fifi",
      email: "fifi123@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  banner: [
    {
      _id: 12,
      image: "/images/Banner/Banner-1.jpg",
    },
    {
      _id: 13,
      image: "/images/Banner/Banner-2.jpg",
    },
    {
      _id: 14,
      image: "/images/Banner/Banner-3.jpg",
    },
    {
      _id: 15,
      image: "/images/Banner/Banner-4.jpg",
    },
    {
      _id: 16,
      image: "/images/Banner/Banner-5.jpg",
    },
  ],
  trending: [
    {
      _id: 1,
      keyword: "Toko Rima",
      isUp: true,
      number: 234,
    },
    {
      _id: 2,
      keyword: "Permen",
      isUp: false,
      number: 1,
    },
    {
      _id: 3,
      keyword: "Kopiko",
      isUp: true,
      number: 1,
    },
    {
      _id: 4,
      keyword: "Celana",
      isUp: true,
      number: 7,
    },
    {
      _id: 5,
      keyword: "Celana",
      isUp: true,
      number: 9,
    },
    {
      _id: 6,
      keyword: "Pasmina",
      isUp: false,
      number: 5,
    },
    {
      _id: 7,
      keyword: "Sepatu",
      isUp: false,
      number: 6,
    },
    {
      _id: 8,
      keyword: "Jilbab segi empat",
      isUp: true,
      number: 9,
    },
    {
      _id: 9,
      keyword: "handphone",
      isUp: false,
      number: 2,
    },
    {
      _id: 10,
      keyword: "lenovo",
      isUp: true,
      number: 21,
    },
  ],
  products: [
    {
      _id: "1",
      sold: 234,
      stock: 1,
      city: "Jakarta Barat",
      name: "CY MATCHA POWDER 100% ORIGINAL JAPAN IMPORT GREEN TEA POWDER 100 GR",
      category: "Makanan & Minuman",
      image: [
        {
          _id: 1,
          imageUrl: "/images/matcha-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/matcha-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/matcha-3.jpg",
        },
        {
          _id: 4,
          imageUrl: "/images/matcha-4.jpg",
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
      _id: "2",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "HEADSET | HEADPHONE | HANDSFREE | EARPHONE GAMING JETE-G1",
      category: "Headphone",
      image: [
        {
          _id: 1,
          imageUrl: "/images/jete-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/jete-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/jete-3.jpg",
        },
        {
          _id: 4,
          imageUrl: "/images/jete-4.jpg",
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
      _id: "3",
      sold: 234,
      stock: 0,
      city: "Jakarta Barat",
      name: "Lipton Ice Tea Mix Lychee 510gr",
      category: "Teh Bubuk",
      image: [
        {
          _id: 1,
          imageUrl: "/images/lipton-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/lipton-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/lipton-3.jpg",
        },
        {
          _id: 4,
          imageUrl: "/images/lipton-4.jpg",
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
      _id: "4",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "SAMSUNG GALAXY A72 8/128 DAN 8/256 2021 GARANSI RESMI SEGEL BNIB - Putih 128GB",
      category: "Android OS",
      image: [
        {
          _id: 1,
          imageUrl: "/images/samsung-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/samsung-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/samsung-3.jpg",
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
      _id: "5",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "Force Magic Lemon Pop Art 600 ml - Paket Hemat Isi 2",
      category: "Pest Control",
      image: [
        {
          _id: 1,
          imageUrl: "/images/force-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/force-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/force-3.jpg",
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
      _id: "6",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "Anti Gores Hydrogel Spigen Samsung Galaxy S21 Ultra Plus Neo Flex - S21 Ultra",
      category: "Android OS",
      image: [
        {
          _id: 1,
          imageUrl: "/images/spigen-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/spigen-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/spigen-3.jpg",
        },
        {
          _id: 4,
          imageUrl: "/images/spigen-4.jpg",
        },
        {
          _id: 5,
          imageUrl: "/images/spigen-5.jpg",
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
      _id: "7",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "Wulfi Day to Day Kemeja Tunik Toyobo Fenomenal White - L",
      category: "Tunik Muslim",
      image: [
        {
          _id: 1,
          imageUrl: "/images/tunik-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/tunik-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/tunik-3.jpg",
        },
        {
          _id: 4,
          imageUrl: "/images/tunik-4.jpg",
        },
        {
          _id: 5,
          imageUrl: "/images/tunik-5.jpg",
        },
        {
          _id: 6,
          imageUrl: "/images/tunik-6.jpg",
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
      _id: "8",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "GFRIEND ALBUM -回: LABYRINTH",
      category: "CD & DVD Musik",
      image: [
        {
          _id: 1,
          imageUrl: "/images/album-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/album-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/album-3.jpg",
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
      _id: "9",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "CELANA PANJANG LEVIS JEANS SLIM FIT DENIM PENSIL PRIA LAKI-LAKI - A.Hitam Pekat, 27",
      category: "Celana Jeans Pria",
      image: [
        {
          _id: 1,
          imageUrl: "/images/celana-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/celana-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/celana-3.jpg",
        },
        {
          _id: 4,
          imageUrl: "/images/celana-4.jpg",
        },
        {
          _id: 5,
          imageUrl: "/images/celana-5.jpg",
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
      _id: "10",
      sold: 234,
      stock: 120,
      city: "Jakarta Barat",
      name: "Nampan tray baki kayu putih kotak murah bagus awet kuat persegi",
      category: "Nampan",
      image: [
        {
          _id: 1,
          imageUrl: "/images/nampan-1.jpg",
        },
        {
          _id: 2,
          imageUrl: "/images/nampan-2.jpg",
        },
        {
          _id: 3,
          imageUrl: "/images/nampan-3.jpg",
        },
        {
          _id: 4,
          imageUrl: "/images/nampan-4.jpg",
        },
        {
          _id: 5,
          imageUrl: "/images/nampan-5.jpg",
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
