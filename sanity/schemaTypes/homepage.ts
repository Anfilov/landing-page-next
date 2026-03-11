import {defineType, defineField, defineArrayMember} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // ── HERO ──
    defineField({
      name: 'heroSubtitle',
      title: 'Hero — nadtitulek',
      type: 'string',
      initialValue: 'Od strategie po design.',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero — titulek',
      type: 'string',
      initialValue: 'Grafické design & branding studio',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero — popis',
      type: 'text',
      rows: 3,
      initialValue:
        'Tvoříme vizuální identity, logotypy, tiskoviny a komunikační systémy. Pracujeme s přesností — každý detail má svůj důvod.',
    }),

    // ── MARQUEE ──
    defineField({
      name: 'marqueeItems',
      title: 'Marquee — položky',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      initialValue: [
        'Vizuální identita',
        'Branding',
        'Logotypy',
        'Tiskoviny',
        'Strategie',
        'Design systémy',
        'Naming',
        'Komunikace',
      ],
    }),

    // ── SLUŽBY ──
    defineField({
      name: 'servicesLabel',
      title: 'Služby — nadpis sekce',
      type: 'string',
      initialValue: 'Co děláme',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Služby — titulek',
      type: 'string',
      initialValue: 'Služby',
    }),
    defineField({
      name: 'services',
      title: 'Služby',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({name: 'num', title: 'Číslo', type: 'string'}),
            defineField({name: 'title', title: 'Název', type: 'string'}),
            defineField({name: 'text', title: 'Popis', type: 'text', rows: 2}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'num'},
          },
        }),
      ],
    }),

    // ── STATS ──
    defineField({
      name: 'stats',
      title: 'Statistiky',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({name: 'value', title: 'Hodnota', type: 'number'}),
            defineField({name: 'suffix', title: 'Přípona', type: 'string'}),
            defineField({name: 'label', title: 'Popis', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'value'},
          },
        }),
      ],
    }),

    // ── O NÁS ──
    defineField({
      name: 'aboutLabel',
      title: 'O nás — nadpis sekce',
      type: 'string',
      initialValue: 'O studiu',
    }),
    defineField({
      name: 'aboutHeading',
      title: 'O nás — titulek',
      type: 'string',
      initialValue: 'Simon Anfilov',
    }),
    defineField({
      name: 'aboutParagraphs',
      title: 'O nás — odstavce',
      type: 'array',
      of: [defineArrayMember({type: 'text'})],
    }),
    defineField({
      name: 'aboutQuote',
      title: 'O nás — citát',
      type: 'text',
      rows: 3,
      initialValue: '3 dekády. Stovky projektů. Jeden přístup — přesnost.',
    }),
    defineField({
      name: 'aboutEstablished',
      title: 'O nás — založeno',
      type: 'string',
      initialValue: 'Est. 1996',
    }),

    // ── KONTAKT ──
    defineField({
      name: 'contactLabel',
      title: 'Kontakt — nadpis sekce',
      type: 'string',
      initialValue: 'Začněme spolupráci',
    }),
    defineField({
      name: 'contactHeading',
      title: 'Kontakt — titulek',
      type: 'text',
      rows: 2,
      initialValue: 'Máte projekt, který potřebuje silnou značku?',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Kontakt — popis',
      type: 'text',
      rows: 2,
      initialValue: 'Ozvěte se. Probereme, co potřebujete, a navrhneme řešení.',
    }),

    // ── FOOTER ──
    defineField({
      name: 'footerTagline',
      title: 'Footer — tagline',
      type: 'string',
      initialValue: 'Od strategie po design.',
    }),
    defineField({
      name: 'footerEmail',
      title: 'Footer — email',
      type: 'string',
      initialValue: 'info@anfilov.cz',
    }),
    defineField({
      name: 'footerPhone',
      title: 'Footer — telefon',
      type: 'string',
      initialValue: '+420 777 000 000',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage'}
    },
  },
})
