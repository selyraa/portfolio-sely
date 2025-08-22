export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    github: string;
    live: string;
    category: 'Internship' | 'University' | 'Project';
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Meeting Room Booking App',
        description: 'Mengembangkan aplikasi booking ruang rapat menggunakan Laravel, Filament, dan Flutter.',
        longDescription: 'Selama magang di PT SISI, saya bertanggung jawab penuh dalam mengembangkan aplikasi booking ruang rapat dari awal. Proyek ini meliputi pembuatan REST API menggunakan Laravel sebagai backend, pengembangan panel admin web yang intuitif dengan Laravel Filament, dan pembuatan aplikasi mobile cross-platform menggunakan Flutter untuk pengguna akhir. Tujuannya adalah untuk mendigitalisasi dan menyederhanakan proses pemesanan ruang rapat di perusahaan.',
        image: '/images/project-intern-sisi.png',
        tags: ['Laravel', 'Filament', 'Flutter', 'Mobile', 'API'],
        github: '#',
        live: '#',
        category: 'Internship',
    },
    {
        id: 2,
        title: 'Sistem Verifikasi Tagihan Online',
        description: 'Mengembangkan dan memelihara modul verifikasi tagihan pada sistem ERP PT INKA.',
        longDescription: 'Pada magang di PT INKA (Persero), saya tergabung dalam tim IT dan bertugas untuk mengembangkan serta memelihara modul verifikasi tagihan online pada sistem Enterprise Resource Planning (ERP) perusahaan. Saya menggunakan Laravel dan mengimplementasikan berbagai fitur baru sesuai kebutuhan, melakukan perbaikan bug, dan memastikan modul berjalan dengan stabil dan efisien.',
        image: '/images/project-intern-inka.png',
        tags: ['Laravel', 'Web Development', 'PHP', 'MySQL'],
        github: 'https://github.com/selyraa',
        live: '#',
        category: 'Internship',
    },
    {
        id: 3,
        title: "Car Rental Website",
        description: "Proyek mata kuliah untuk membuat sistem penyewaan mobil berbasis web.",
        longDescription: "Dalam proyek ini, saya membangun website penyewaan mobil dengan fitur utama seperti registrasi pengguna, pemesanan mobil, manajemen data mobil, dan laporan transaksi. Proyek ini menggunakan HTML, CSS, JavaScript, dan PHP sebagai stack utama.",
        image: "/images/gorent.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", 'Web Development'],
        github: "https://github.com/selyraa",
        live: "#",
        category: "University"
    },
    {
        id: 4, title: "Farhan Catering Website",
        description: "Website untuk marketing dan manajemen bisnis catering.",
        longDescription: "Website ini dikembangkan untuk membantu bisnis catering dalam mengelola pesanan dan pemasaran. Fitur yang disediakan mencakup manajemen menu, pemesanan online, serta halaman promosi produk. Proyek ini saya bangun sebagai salah satu hasil kolaborasi akademik.",
        image: "/images/catering.png",
        tags: ["HTML", "CSS", "JavaScript", "Web Development"],
        github: "https://github.com/selyraa",
        live: "#",
        category: "University"
    },
    {
        id: 5,
        title: "Inventory Management System",
        description: "Aplikasi berbasis web untuk manajemen inventaris barang.",
        longDescription: "Sistem ini dirancang untuk mempermudah pencatatan, pelacakan, dan pengelolaan stok barang. Menggunakan PHP dan MySQL, aplikasi ini mencakup fitur pencatatan barang masuk/keluar, laporan inventaris, serta pengingat stok rendah.",
        image: "/images/glj.png",
        tags: ["PHP", "MySQL", "Bootstrap"],
        github: "https://github.com/selyraa",
        live: "#",
        category: "University"
    },
    {
        id: 6,
        title: "Job Center Website",
        description: "Website penyedia lowongan pekerjaan sekaligus decision support system.",
        longDescription: "Proyek ini merupakan sistem informasi lowongan pekerjaan dengan tambahan fitur decision support system (DSS) yang mampu melakukan ranking kandidat berdasarkan kriteria tertentu. Sistem dibangun menggunakan Laravel, JavaScript, dan MySQL.",
        image: "/images/job-center.png",
        tags: ["Laravel", "JavaScript", "MySQL", "Web Development"],
        github: "https://github.com/selyraa",
        live: "#",
        category: "University"
    },
    {
        id: 7,
        title: "Sistem Peramalan Kacang Kedelai",
        description: "Website untuk peramalan stok kacang kedelai menggunakan metode DES.",
        longDescription: "Proyek ini saya kerjakan dalam kolaborasi pengabdian masyarakat di Pabrik Tahu Melati, Batu. Sistem berbasis Laravel ini menggunakan metode Double Exponential Smoothing (DES) untuk memprediksi kebutuhan kacang kedelai, sehingga membantu perusahaan dalam perencanaan stok bahan baku yang lebih akurat.",
        image: "/images/project-tahumelati.png",
        tags: ["Laravel", "MySQL", "Machine Learning", "DSS", "Web Development"],
        github: "#",
        live: "#",
        category: "Project"
    },
    {
        id: 8,
        title: "Sistem Prediksi dan Rekomendasi Program Diet",
        description: "Sistem berbasis machine learning untuk klasifikasi dan rekomendasi program diet.",
        longDescription: "Proyek skripsi saya berupa sistem prediksi dan rekomendasi diet. Menggunakan algoritma Random Forest untuk klasifikasi program diet (naik berat badan, turun berat badan, atau turun lemak) berdasarkan data komposisi tubuh. Hasil prediksi kemudian diintegrasikan dengan Large Language Model (LLM) untuk menghasilkan rekomendasi makanan, aktivitas fisik, dan pola tidur yang sesuai.",
        image: "/images/project-nutcastle.png",
        tags: ["Machine Learning", "Random Forest", "LLM", "Laravel", "Web Development"],
        github: "#",
        live: "#",
        category: "Project"
    },
];