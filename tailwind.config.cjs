const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
            // Legacy alias — headings across the site use font-serif, keep it pointing at the display face
            serif: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
            mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono]
        },
        extend: {
            colors: {
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                'accent-2': 'rgb(var(--color-accent-2) / <alpha-value>)'
            },
            textColor: {
                main: 'rgb(var(--color-text-main) / <alpha-value>)'
            },
            backgroundColor: {
                main: 'rgb(var(--color-bg-main) / <alpha-value>)',
                muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
                surface: 'rgb(var(--color-bg-surface) / <alpha-value>)'
            },
            borderColor: {
                main: 'rgb(var(--color-border-main) / <alpha-value>)'
            },
            boxShadow: {
                glow: '0 0 40px -8px rgb(var(--color-accent) / 0.45)',
                'glow-sm': '0 0 18px -4px rgb(var(--color-accent) / 0.5)'
            },
            typography: (theme) => ({
                dante: {
                    css: {
                        '--tw-prose-body': theme('textColor.main / 100%'),
                        '--tw-prose-headings': theme('textColor.main / 100%'),
                        '--tw-prose-lead': theme('textColor.main / 100%'),
                        '--tw-prose-links': theme('textColor.main / 100%'),
                        '--tw-prose-bold': theme('textColor.main / 100%'),
                        '--tw-prose-counters': theme('textColor.main / 100%'),
                        '--tw-prose-bullets': theme('textColor.main / 100%'),
                        '--tw-prose-hr': theme('borderColor.main / 100%'),
                        '--tw-prose-quotes': theme('textColor.main / 100%'),
                        '--tw-prose-quote-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-captions': theme('textColor.main / 100%'),
                        '--tw-prose-code': theme('textColor.main / 100%'),
                        '--tw-prose-pre-code': theme('colors.zinc.100'),
                        '--tw-prose-pre-bg': theme('colors.zinc.900'),
                        '--tw-prose-th-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-td-borders': theme('borderColor.main / 100%')
                    }
                },
                DEFAULT: {
                    css: {
                        a: {
                            fontWeight: '500',
                            textDecoration: 'underline',
                            textDecorationStyle: 'dotted',
                            textDecorationThickness: '1px',
                            textUnderlineOffset: '3px',
                            '&:hover': {
                                color: 'rgb(var(--color-accent))',
                                textDecorationStyle: 'solid'
                            }
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            fontFamily: theme('fontFamily.display'),
                            fontWeight: 600,
                            letterSpacing: '-0.02em'
                        },
                        blockquote: {
                            border: 0,
                            borderLeft: '2px solid rgb(var(--color-accent))',
                            fontSize: '1.125em',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: 1.6,
                            paddingLeft: '1.5rem',
                            color: 'rgb(var(--color-text-main) / 0.75)'
                        },
                        code: {
                            fontFamily: theme('fontFamily.mono')
                        }
                    }
                },
                lg: { css: { blockquote: { paddingLeft: '1.5rem' } } }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
