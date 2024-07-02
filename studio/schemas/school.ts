import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'school',
    title: 'School',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'country',
            title: 'Country',
            type: 'string'
        }),
        defineField({
            name: 'streetAddress',
            title: 'Street Address',
            type: 'string'
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string'
        }),
        defineField({
            name: 'state',
            title: 'State/Province',
            type: 'string'
        }),
        defineField({
            name: 'postalCode',
            title: 'Postal Code',
            type: 'string'
        }),
        defineField({
            name: 'sliderImage',
            title: 'Slider Image',
            type: 'image',
            description: 'this image will add to the slider if the school is a member'
        }),
        defineField({
            name: 'sliderLink',
            title: 'Slider Link',
            type: 'URL',
            description: 'the link applied to the slider image if the school is a member'
        }),
        defineField({
            name: 'isMember',
            title: 'Is Member',
            type: 'Boolean'
        })
    ]
})
