pipeline {
  agent any

  environment {
    IMAGE = "react-chatbot"
    TAG   = "${env.BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Install') {
      steps { sh 'npm ci' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
    stage('Docker Build') {
      steps { sh 'docker build -t $IMAGE:$TAG -t $IMAGE:latest .' }
    }
    stage('Deploy') {
      steps {
        sh '''
          docker rm -f react-chatbot || true
          docker run -d --name react-chatbot -p 8080:80 $IMAGE:latest
        '''
      }
    }
  }

  post {
    success { echo 'Deployed: http://localhost:8080' }
    failure { echo 'Pipeline failed' }
  }
}
