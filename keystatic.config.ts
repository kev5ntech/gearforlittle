import { config, fields, collection } from '@keystatic/core';

const categoryOptions = [
  { label: 'Strollers', value: 'strollers' },
  { label: 'Car Seats', value: 'car-seats' },
  { label: 'Monitors', value: 'monitors' },
  { label: 'Cribs', value: 'cribs' },
  { label: 'Feeding', value: 'feeding' },
  { label: 'Carriers', value: 'carriers' },
  { label: 'Diaper Bags', value: 'diaper-bags' },
  { label: 'Travel', value: 'travel' },
  { label: 'Guides', value: 'guides' },
  { label: 'Registry', value: 'registry' },
] as const;

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: {
      name: 'Gear for Little',
    },
  },

  collections: {
    // -----------------------------------------------------------------------
    // Blog Posts
    // -----------------------------------------------------------------------
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        publishDate: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: 'Updated Date',
        }),
        author: fields.text({
          label: 'Author',
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Category',
          options: categoryOptions,
          defaultValue: 'guides',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          defaultValue: false,
        }),
        affiliateDisclosure: fields.checkbox({
          label: 'Affiliate Disclosure',
          defaultValue: true,
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        heroImageAlt: fields.text({
          label: 'Hero Image Alt Text',
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),

    // -----------------------------------------------------------------------
    // Products
    // -----------------------------------------------------------------------
    products: collection({
      label: 'Products',
      slugField: 'name',
      path: 'src/content/products/*',
      schema: {
        name: fields.slug({ name: { label: 'Product Name' } }),
        brand: fields.text({
          label: 'Brand',
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Category',
          options: categoryOptions,
          defaultValue: 'strollers',
        }),
        price: fields.number({
          label: 'Price (USD)',
          validation: { isRequired: true },
        }),
        rating: fields.number({
          label: 'Rating (1–5)',
          validation: { isRequired: true, min: 1, max: 5 },
        }),
        affiliateUrl: fields.url({
          label: 'Affiliate URL',
        }),
        amazonUrl: fields.url({
          label: 'Amazon URL',
        }),
        image: fields.image({
          label: 'Product Image',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        imageAlt: fields.text({
          label: 'Image Alt Text',
        }),
        pros: fields.array(
          fields.text({ label: 'Pro' }),
          {
            label: 'Pros',
            description: 'List the advantages of this product',
            itemLabel: (props) => props.value || 'New pro',
          },
        ),
        cons: fields.array(
          fields.text({ label: 'Con' }),
          {
            label: 'Cons',
            description: 'List the disadvantages of this product',
            itemLabel: (props) => props.value || 'New con',
          },
        ),
        verdict: fields.text({
          label: 'Verdict',
          multiline: true,
          validation: { isRequired: true },
        }),
        isBestPick: fields.checkbox({
          label: 'Best Pick',
          defaultValue: false,
        }),
      },
    }),

    // -----------------------------------------------------------------------
    // Comparisons
    // -----------------------------------------------------------------------
    comparisons: collection({
      label: 'Comparisons',
      slugField: 'title',
      path: 'src/content/comparisons/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        product1: fields.relationship({
          label: 'Product 1',
          collection: 'products',
          validation: { isRequired: true },
        }),
        product2: fields.relationship({
          label: 'Product 2',
          collection: 'products',
          validation: { isRequired: true },
        }),
        winner: fields.text({
          label: 'Winner (product slug)',
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
});
