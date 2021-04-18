export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607b905fbd520142de4dcd64',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uet67sok',
                  apiId: 'e3142f94-5814-41a9-b929-2ca8ea07b4fb'
                },
                {
                  buildHookId: '607b905f8b9c676eb9aa0aca',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2eakqj8b',
                  apiId: '122d1824-e4b7-4e5f-8834-2020a23d4082'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brandon484-4/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2eakqj8b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
