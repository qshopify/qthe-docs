/** FAQ shown on /faq. Answers are short HTML; link to the docs for detail. */
export type Faq = { q: string; a: string };
export type FaqGroup = { topic: string; items: Faq[] };

export const FAQS: FaqGroup[] = [
  {
    topic: 'Getting started',
    items: [
      {
        q: 'Can I try QThe before buying it?',
        a: 'Yes. Click <b>Try theme</b> on the Theme Store listing to add QThe to your theme library and preview it with your own products. You only pay when you publish it.',
      },
      {
        q: 'Will my store look like the demo store?',
        a: 'The layout, colors and fonts match the demo. The demo’s images and text don’t transfer, so you’ll see placeholders until you add your own. See <a href="/docs/getting-started/install">Install QThe</a>.',
      },
      {
        q: 'Which menus does QThe use?',
        a: 'The header uses your <b>Main menu</b> and the footer uses your <b>Footer menu</b> from <b>Online Store &gt; Navigation</b>. You can choose different menus in the header and footer sections.',
      },
      {
        q: 'How do I change the logo and favicon?',
        a: 'Upload the logo in the <b>Header</b> section (<b>Logo image</b>) and the favicon in <b>Theme settings &gt; Favicon</b>. The footer has its own <b>Logo image</b> setting.',
      },
    ],
  },
  {
    topic: 'Design and content',
    items: [
      {
        q: 'How do I change colors and fonts?',
        a: 'In <b>Theme settings</b>, edit the <b>color schemes</b> and pick a heading and body font. Every section has a <b>Color scheme</b> setting, so a change to a scheme updates every section that uses it. See <a href="/docs/getting-started/theme-settings">Theme settings</a>.',
      },
      {
        q: 'What’s the difference between the QThe, Seventh Steep and Vesper presets?',
        a: 'Each preset has its own color schemes, fonts, theme style and home, collection and product templates. QThe opens with a note wall in columns, Seventh Steep with a note wall in rows on a dark green palette, and Vesper with a featured product on a blush palette with pill buttons. See <a href="/docs/getting-started/theme-settings#presets">Presets</a>.',
      },
      {
        q: 'Which fonts does QThe use, and can I change them?',
        a: 'By default, Unbounded for headings and Figtree for body text, both from Shopify’s font library. Seventh Steep and Vesper use their own pairs. Change them in <b>Theme settings &gt; Typography</b>, and scale every heading with <b>Heading size</b> in <b>Theme settings &gt; Theme style</b>.',
      },
      {
        q: 'Why don’t I see the newsletter form in the footer?',
        a: 'QThe shows one signup form per page. When a page has a <b>Newsletter</b> section, the footer’s form hides itself on that page.',
      },
      {
        q: 'Where do the notes line and card labels come from?',
        a: 'From optional product metafields: <code>custom.subtitle</code> for the notes line and <code>custom.kicker</code> for the card label. See <a href="/docs/products/product-data">Product details from metafields and tags</a>.',
      },
      {
        q: 'How do I add a badge such as “Bestseller” to a product card?',
        a: 'Add a product tag starting with <code>badge:</code>, for example <code>badge:Bestseller</code>. Sale badges appear automatically when a product has a compare-at price.',
      },
    ],
  },
  {
    topic: 'The note strip',
    items: [
      {
        q: 'What is the note strip?',
        a: 'A colored strip that draws each product as its top, heart and base notes, with the longest-lasting note at the tip. It appears on product cards, the product page, the cart, search and many sections. See <a href="/docs/products/note-strip">The note strip</a>.',
      },
      {
        q: 'Where do the strip colors come from?',
        a: 'First from the product’s <code>custom.notes_top</code>, <code>custom.notes_heart</code> and <code>custom.notes_base</code> metafields and the color of each matching <b>Note</b> entry. Without notes, from the product’s color swatches. Without either, from the three strip colors in the section’s color scheme.',
      },
      {
        q: 'Which metafields do I need to set up?',
        a: 'None are required. For strips in your own note colors, create the three notes metafields as single line text or as a reference to the <b>Note</b> metaobject, with a <code>color</code> field on each entry. Add <code>custom.note_profile</code> to set band lengths per product. See <a href="/docs/products/product-data">Product details from metafields and tags</a>.',
      },
      {
        q: 'Why are all my strips the same colors?',
        a: 'Products without notes metafields or color swatches use the color scheme’s <b>Strip — top</b>, <b>Strip — heart</b> and <b>Strip — base</b> colors. Edit them in <b>Theme settings &gt; Colors</b>, or add notes to your products. If your products do have notes but their strips still look alike, check that each <b>Note</b> entry has its own color rather than one color per family.',
      },
      {
        q: 'Can I hide the strip on product cards?',
        a: 'Yes. Set <b>Strip on product cards</b> to <b>None</b> in <b>Theme settings &gt; Note strips</b>. Most sections that show a strip also have their own setting to hide it.',
      },
    ],
  },
  {
    topic: 'Products and cart',
    items: [
      {
        q: 'How do I show review stars?',
        a: 'Install a review app that writes Shopify’s standard <code>reviews.rating</code> metafield. Stars then appear on cards and the product page. Add the app’s review widget as an app block on the product page.',
      },
      {
        q: 'Does QThe support subscriptions?',
        a: 'Yes. Install a subscription app that creates selling plans, then assign the <b>subscription</b> product template. The chosen plan shows on the product page and in the cart.',
      },
      {
        q: 'Why doesn’t the bundle builder discount the price?',
        a: 'The bundle builder shows the discount, but the price change comes from a discount you create in <b>Discounts</b> — for example an automatic discount on three items from the collection.',
      },
      {
        q: 'The free shipping meter says “free”, but checkout charges shipping.',
        a: 'The meter is a message only. Create the matching free shipping rate in <b>Settings &gt; Shipping and delivery</b>.',
      },
      {
        q: 'How do I show pickup availability?',
        a: 'Turn on local pickup for a location in <b>Settings &gt; Shipping and delivery</b>, then add the <b>Pickup availability</b> block to the product page.',
      },
    ],
  },
  {
    topic: 'Updates and support',
    items: [
      {
        q: 'Will I lose my changes when I update the theme?',
        a: 'No — settings, sections and content carry over. Code edits don’t, so keep custom code in the <b>Custom liquid</b> section or block where possible. See <a href="/docs/support/updating">Updating QThe</a>.',
      },
      {
        q: 'What changes when I update to 1.1.0?',
        a: 'Version 1.1.0 adds the note strip, the Note tiers product layout, the Note wall section, Theme style and Note strips settings, and new section layouts. Your settings and content carry over, and every earlier layout is still available. Preview your pages before publishing, since some sections have new defaults. See the <a href="/docs/support/release-notes">release notes</a>.',
      },
      {
        q: 'Can you customize the theme for me?',
        a: 'Theme support covers setup questions and bugs, not custom work. For custom features, hire a Shopify Partner. See our <a href="/docs/support/support-policy">support policy</a>.',
      },
      {
        q: 'How do I contact support?',
        a: 'Use the <a href="/support">support form</a>. We reply within two business days.',
      },
    ],
  },
];
