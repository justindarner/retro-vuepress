module.exports = {
  title: 'Video Game Archives',
  description: 'Your source for retro-gaming preservation and documentation',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Consoles',
        link: '/consoles/snes/',
      },
    ],
    sidebar: {
      '/consoles/snes/': ['', '1chip/', 'csync', 'digital-audio/', 'tips'],
      '/': [
        ''
      ]
    }
  }
}

