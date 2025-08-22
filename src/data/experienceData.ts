// src/data/experienceData.ts

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[]; 
    type: 'Internship' | 'Professional' | 'Freelance';
}

export const experienceData: Experience[] = [
    {
        id: 1,
        role: 'Teaching Assistant',
        company: 'State Polytechnic of Malang',
        period: 'February 2025 - Maret 2025',
        description: [
            'As a Teaching Assistant for the Advanced Web Programming course, I was responsible for delivering foundational Laravel concepts, including:',
            '1.  Routing, Views, and Controllers.',
            '2.  Database Management: Migration & Seeder.',
            '3.  Query Handling with DB Facade & Query Builder.',
            '4.  Object-Relational Mapping (ORM) with Eloquent.',
            'In addition to lecturing, I also graded assignments and provided feedback to help students enhance their understanding of Laravel.',
        ],
        type: 'Freelance',
    },
    {
        id: 2,
        role: 'System Analyst',
        company: 'PT SISI (Internship)',
        period: 'July 2024 - December 2024',
        description: [
            'Mengembangkan aplikasi booking ruang rapat dari awal hingga akhir.',
            'Membangun RESTful API menggunakan Laravel untuk backend.',
            'Membuat panel admin web yang responsif dan fungsional dengan Laravel Filament.',
            'Mengembangkan aplikasi mobile cross-platform untuk pengguna akhir menggunakan Flutter.',
        ],
        type: 'Internship',
    },
    {
        id: 3,
        role: 'Full Stack Developer',
        company: 'PT INKA (Internship)',
        period: 'February 2024 - June 2024',
        description: [
            'Developed and implemented over five key features for the "Online Invoice Verification System" using the Laravel framework, significantly improving internal business processes.',
            'Engaged in the end-to-end development cycle, from database design and backend logic implementation to front-end interface development.',
            'Collaborated with the IT team to ensure system stability and efficiency.',
        ],
        type: 'Internship',
    },
    {
        id: 4,
        role: 'Full Stack Developer',
        company: 'PT INKA (Internship)',
        period: 'February 2024 - June 2024',
        description: [
            'Developed and implemented over five key features for the "Online Invoice Verification System" using the Laravel framework, significantly improving internal business processes.',
            'Engaged in the end-to-end development cycle, from database design and backend logic implementation to front-end interface development.',
            'Collaborated with the IT team to ensure system stability and efficiency.',
        ],
        type: 'Internship',
    },
    {
        id: 5,
        role: 'Full Stack Developer',
        company: 'PT INKA (Internship)',
        period: 'February 2024 - June 2024',
        description: [
            'Developed and implemented over five key features for the "Online Invoice Verification System" using the Laravel framework, significantly improving internal business processes.',
            'Engaged in the end-to-end development cycle, from database design and backend logic implementation to front-end interface development.',
            'Collaborated with the IT team to ensure system stability and efficiency.',
        ],
        type: 'Internship',
    },
    
];