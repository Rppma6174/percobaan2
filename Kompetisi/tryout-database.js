const allTryouts = {
  // ID unik untuk setiap paket tryout
  "snbt-pkpm-1": {
    title: "Tryout SNBT PK & PM #1",
    duration: 1500, // 25 menit * 60 detik
    questions: [
      { 
        id: 1, 
        text: `Jika $p = 2a + 3$ dan $q = a + 6$, maka nilai dari $2p + 4q$ adalah...`, 
        options: [
          `$6a + 30$`, 
          `$8a + 30$`, 
          `$8a + 18$`, 
          `$4a + 24$`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 2, 
        text: `Manakah dari bilangan berikut yang habis dibagi 3 dan 4?`, 
        options: [
          `140`, 
          `154`, 
          `132`, 
          `162`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 3, 
        text: `Sebuah persegi panjang memiliki panjang $x$ cm dan lebar $y$ cm. Jika luasnya adalah 48 cm² dan kelilingnya 28 cm, berapakah nilai dari $x+y$?`, 
        options: [
          `28`, 
          `48`, 
          `12`, 
          `14`
        ], 
        correctAnswer: 3 
      },
      { 
        id: 4, 
        text: `Bilangan ke-5 dari suatu barisan aritmatika adalah 23 dan bilangan ke-10 adalah 43. Berapakah suku pertama barisan tersebut?`, 
        options: [
          `4`, 
          `5`, 
          `7`, 
          `3`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 5, 
        text: `Jika $x$ adalah 20% dari 70, dan $y$ adalah 70% dari 20, maka pernyataan yang benar adalah...`, 
        options: [
          `$x > y$`, 
          `$x < y$`, 
          `$x = y$`, 
          `Hubungan tidak dapat ditentukan`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 6, 
        text: `Rata-rata nilai 5 siswa adalah 80. Jika nilai seorang siswa baru ditambahkan, rata-ratanya menjadi 82. Berapakah nilai siswa baru tersebut?`, 
        options: [
          `82`, 
          `90`, 
          `92`, 
          `88`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 7, 
        text: `Sebuah dadu dan sebuah koin dilempar bersamaan. Berapa peluang munculnya mata dadu ganjil dan sisi gambar pada koin?`, 
        options: [
          `$\\frac{1}{2}$`, 
          `$\\frac{1}{4}$`, 
          `$\\frac{1}{6}$`, 
          `$\\frac{3}{4}$`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 8, 
        text: `Operasi $\\odot$ pada himpunan bilangan bulat didefinisikan dengan aturan: $a \\odot b = b(a+b) - a$. Nilai dari $3 \\odot (2 \\odot 1)$ adalah...`, 
        options: [
          `12`, 
          `1`, 
          `15`, 
          `9`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 9, 
        text: `Harga sebuah buku didiskon 20%. Jika harga setelah diskon adalah Rp 48.000, berapakah harga awal buku tersebut?`, 
        options: [
          `Rp 57.600`, 
          `Rp 60.000`, 
          `Rp 54.000`, 
          `Rp 64.000`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 10, 
        text: `Jika $3^{x-1} = 81$, maka nilai $x$ adalah...`, 
        options: [
          `4`, 
          `3`, 
          `2`, 
          `5`
        ], 
        correctAnswer: 3 
      },
      { 
        id: 11, 
        text: `Sudut-sudut sebuah segitiga memiliki perbandingan 2:3:5. Berapakah besar sudut terkecil dari segitiga tersebut?`, 
        options: [
          `18°`, 
          `54°`, 
          `36°`, 
          `90°`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 12, 
        text: `Manakah di antara pilihan berikut yang BUKAN merupakan bilangan prima?`, 
        options: [
          `41`, 
          `51`, 
          `61`, 
          `71`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 13, 
        text: `Tiga tahun yang lalu, jumlah umur Ani dan Budi adalah 26 tahun. Jika sekarang umur Ani 4 tahun lebih tua dari Budi, berapakah umur Budi sekarang?`, 
        options: [
          `18 tahun`, 
          `11 tahun`, 
          `14 tahun`, 
          `16 tahun`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 14, 
        text: `Jika $x > 0$ dan $y < 0$, maka manakah dari ekspresi berikut yang nilainya PASTI positif?`, 
        options: [
          `$y - x$`, 
          `$x - y$`, 
          `$x \\times y$`, 
          `$x + y$`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 15, 
        text: `Pola berikutnya dari barisan 2, 3, 5, 8, 13, ... adalah?`, 
        options: [
          `18`, 
          `20`, 
          `19`, 
          `21`
        ], 
        correctAnswer: 3 
      }
    ]
  },

  // Untuk tryout yang 'Segera Hadir', Anda tidak perlu membuat datanya di sini.
};