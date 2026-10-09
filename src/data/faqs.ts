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
        a: 'Upload the logo in the <b>Header</b> section (<b>Logo image</b>) and the favicon in <b>Theme settings &gt; Logo and favicon</b>.',
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
