module.exports = function(grunt) {


  require('load-grunt-config')(grunt, {
    config: {
      masterDoc: 'README.md',
      doc: 'README.md',
      design: 'simple'
      data: {
        pageTitle: '',
        analytics: 'UA-24017782-2',
        github: 'github.com/',
        builtBy: 'First + Third',
        twitterShare: ''
      }
    }
  });

};
