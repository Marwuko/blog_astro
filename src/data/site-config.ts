export type Image = { src: string; alt?: string };
export type Link = { text: string; href: string };

export type SiteConfig = {
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    logo?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: {
        title?: string;
        text?: string;
        image?: Image;
        actions?: Link[];
    };
    subscribe?: {
        title?: string;
        text?: string;
        formUrl: string;
    };
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Felix Marwuko – AI, Data & Systems',
    subtitle: 'AI · Data · Systems',
    description: 'Portfolio and blog of Felix Marwuko, focusing on AI, data systems, and automation projects.',
    image: {
        src: '/Hero.png',
        alt: 'AI and data systems hero illustration'
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'Tags', href: '/tags' }
    ],
    footerNavLinks: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Terms', href: '/terms' }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/felix-marwuko'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/marwuko'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/Marwuko'
        }
    ],
    hero: {
        // The headline itself lives in Hero.astro (it has a typewriter effect); this text sits under it
        title: 'I build things with data',
        text: `
I’m **Felix Marwuko**, an IT and data professional based in South Korea. I finished my **B.S. in Information Technology (Data Science)** at **University of Massachusetts Global**, and I support teaching and analytics as a **Teaching Assistant at Woosong University**.

Most days you’ll find me wiring AI assistants into everyday tools, designing database schemas, or turning a messy spreadsheet into something a business can actually use.
`,
        image: {
            src: '/about.jpeg',
            alt: 'Felix working at his desk in the evening'
        },
        actions: [
            {
                text: 'View Projects',
                href: '/projects'
            },
            {
                text: 'About Me',
                href: '/about'
            }
        ]
    },
    subscribe: {
        title: 'Once in a while, I write things down',
        text: 'No schedule, no spam. Just occasional notes on projects, lessons learned, and experiments in AI and data.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
