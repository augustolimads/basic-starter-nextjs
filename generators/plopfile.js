module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}Component/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      }
    ]
  }),
    plop.setGenerator('template', {
      description: 'Create a template',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your template name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/templates/{{pascalCase name}}Template/index.tsx',
          templateFile: 'templates/Template.tsx.hbs'
        }
      ]
    })
}
