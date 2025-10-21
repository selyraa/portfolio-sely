// src/data/experienceData.ts

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[]; 
    jobdesc?: string[];
    type: 'Internship' | 'Professional' | 'Freelance' ;
}

export const experienceData: Experience[] = [
    {
        id: 1,
        role: 'IT Business Analyst',
        company: 'BPJS Kesehatan',
        period: 'Sept 2025 - Now',
        description: [
            'As an IT Business Analyst, I am involved in analyzing business needs, developing system development documents, and designing digital solutions that support service transformation within BPJS Kesehatan. My primary responsibilities and contributions include:',
        ],
        jobdesc: [
            'Participating in business requirements analysis and preparing system development documents (Project Charter, Change Request, System Design).',
            'Conducting requirements gatherings with users and preparing Minutes of Meeting (MoM).',
            'Creating and customizing application interface mockups (SMKI and Arsip Digital Dewan Pengawas).',
        ],
        type: 'Professional',
    },
    {
        id: 2,
        role: 'Quality Assurance',
        company: 'Rakit Digital',
        period: 'Nov 2024 - Aug 2025',
        description: [
            'Responsible for ensuring the quality and functionality of web applications developed by the team. My tasks included:',
        ],
        jobdesc: [
            'Developing and executing test plans and test cases.',
            'Identifying and documenting bugs and issues.',
        ],
        type: 'Freelance',
    },
    {
        id: 3,
        role: 'Teaching Assistant',
        company: 'State Polytechnic of Malang',
        period: 'February 2025 - Maret 2025',
        description: [
            'As a Teaching Assistant for the Advanced Web Programming course, I was responsible for delivering foundational Laravel concepts, including:',
        ],
        jobdesc: [
            'Routing, Views, and Controllers.',
            'Database Management: Migration & Seeder.',
            'Query Handling with DB Facade & Query Builder.',
            'Object-Relational Mapping (ORM) with Eloquent.',
            'In addition to lecturing, I also graded assignments and provided feedback to help students enhance their understanding of Laravel.',
        ],
        type: 'Freelance',
    },
    {
        id: 4,
        role: 'System Analyst',
        company: 'PT SISI (Internship)',
        period: 'July 2024 - December 2024',
        description: [
            'Internship as a System Analyst in the Research and Development Division.',
        ],
        jobdesc: [
            'Assist functional positions and business analysts in creating technical documentation, compiling user manuals for menus in the system.',
            'Create documents and conduct System Integration Testing (SIT) on the e-procurement system.',
            'Communicate with the development team and support team regarding development process updates, and translate technical information into technical documents and verbal explanations that are easily understood by the functional team.',
            'Developing a meeting room booking application using Laravel as the backend, Laravel Filament as the frontend for the web platform, and Flutter as the frontend for the mobile platform.',
            'Optimized WordPress website performance by analyzing Core Web Vitals, auditing with Lighthouse & GTmetrix, optimizing assets (images, CSS, JavaScript), and configuring caching & CDN plugins.',
            'Documented audit results, configuration changes, and recommended optimizations for long-term improvements.',
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
        ],
        jobdesc: [
            'Engaged in the end-to-end development cycle, from database design and backend logic implementation to front-end interface development.',
            'Collaborated with the IT team to ensure system stability and efficiency.',
        ],
        type: 'Internship',
    },
    // {
    //     id: 6,
    //     role: 'Full Stack Developer',
    //     company: 'PT INKA (Internship)',
    //     period: 'February 2024 - June 2024',
    //     description: [
    //         'Developed and implemented over five key features for the "Online Invoice Verification System" using the Laravel framework, significantly improving internal business processes.',
    //         'Engaged in the end-to-end development cycle, from database design and backend logic implementation to front-end interface development.',
    //         'Collaborated with the IT team to ensure system stability and efficiency.',
    //     ],
    //     type: 'Internship',
    // },
    ];