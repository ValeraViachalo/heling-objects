export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'aboutProduct',
      type: 'string',
      title: 'About Product',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondaryImage',
      type: 'image',
      title: 'Secondary Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'thirdImage',
      type: 'image',
      title: 'Third Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
