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
                  buildHookId: '60bc37107dcd20eebd8e6118',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-eiwm7ymr',
                  apiId: '71dd9f36-b17d-4a4f-8808-dadf8d588c3f'
                },
                {
                  buildHookId: '60bc37106deb959bc96ad4e8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-efjq69u5',
                  apiId: '85071ba9-12c3-43c1-8c3a-2eef982bb10f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dichenafederico/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-efjq69u5.netlify.app', category: 'apps'}
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
