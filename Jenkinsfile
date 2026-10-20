pipeline {
  agent any

  environment {
    // Jenkins doesn't load your shell's PATH, so tell it where node and docker are
    PATH = "/Users/admin/.nvm/versions/node/v20.19.5/bin:/usr/local/bin:/opt/homebrew/bin:/Applications/Docker.app/Contents/Resources/bin:${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Install') {
      steps {
        sh 'node -v && npm -v && docker -v'
        sh 'npm ci'
      }
    }
  }
}