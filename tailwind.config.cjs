const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
            serif: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif]
        },
        extend: {
            textColor: {
                main: 'rgb(var(--color-text-main) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)'
            },
            backgroundColor: {
                main: 'rgb(var(--color-bg-main) / <alpha-value>)',
                muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
                surface: 'rgb(var(--color-bg-surface) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)'
            },
            borderColor: {
                main: 'rgb(var(--color-border-main) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)'
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
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: 500,
                            letterSpacing: '-0.02em'
                        },
                        blockquote: {
                            border: 0,
                            borderLeft: '2px solid rgb(var(--color-accent))',
                            fontFamily: theme('fontFamily.serif'),
                            fontSize: '1.3125em',
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                            lineHeight: 1.4,
                            paddingLeft: '1.5rem',
                            '@media (min-width: theme("screens.sm"))': {
                                fontSize: '1.5em',
                                lineHeight: 1.3
                            }
                        }
                    }
                },
                lg: { css: { blockquote: { paddingLeft: '1.5rem' } } }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
