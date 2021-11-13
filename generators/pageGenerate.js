module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a Page',
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
        path: '../src/pages/{{camelCase name}}.tsx',
        templateFile: 'templates/page.tsx.hbs'
      }
    ]
  })
}
