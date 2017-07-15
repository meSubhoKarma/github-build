const Build = require('./index')

const data = {
  repo: 'siddharthkp/github-build',
  sha: process.env.TRAVIS_PULL_REQUEST_SHA ||
    '4391039e9c506a1702ee7971cda4613ca5da2d69',
  token: process.env.github_token,
  label: 'github-build',
  description: 'Running some tests'
}

const build = new Build(data)
build.start()
setTimeout(() => build.pass('Tests passed!', 'https://examplpe.com'), 5000)

process.on('unhandledRejection', reason => {
  console.log('Unhandled Promise: ')
  console.log(inspect(reason))
  process.exit(1)
})
