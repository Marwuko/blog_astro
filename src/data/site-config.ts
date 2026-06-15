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
        // 👇 Focus the big heading on your role; your name already appears in the site title
        title: 'AI, Data & Systems Builder',
        text: `
I’m **Felix Marwuko**, an IT and data professional based in South Korea. I recently completed my **B.S. in Information Technology (Data Science)** at **University of Massachusetts Global**, and I support teaching and analytics as a **Teaching Assistant at Woosong University**.

I build practical systems at the intersection of **AI, databases, and automation**—from AI-powered assistants that connect to everyday tools to data-driven decision systems for real businesses.
`,
        image: {
            src: '/Hero.png',
            alt: 'Abstract illustration of AI, data, and systems'
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
        title: 'Stay updated',
        text: 'Occasional updates on projects, lessons learned, and experiments in AI and data.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
