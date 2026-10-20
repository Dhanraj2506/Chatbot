pipeline {
  agent any

  environment {
    PATH     = "/Users/admin/.nvm/versions/node/v20.19.5/bin:/usr/local/bin:/opt/homebrew/bin:/Applications/Docker.app/Contents/Resources/bin:${env.PATH}"
    REGISTRY = "localhost:5000"
    IMAGE    = "${REGISTRY}/chatbot-cicd"
    TAG      = "1.0.${BUILD_NUMBER}"
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
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
        sh 'ls -la dist dist/assets'
      }
    }
    stage('Docker Build') {
      steps { sh 'docker build -t $IMAGE:$TAG -t $IMAGE:latest .' }
    }
    stage('Push') {
      steps {
        sh 'docker push $IMAGE:$TAG'
        sh 'docker push $IMAGE:latest'
      }
    }
  }
}