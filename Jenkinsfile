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
    stage('Deploy to dev') {
      steps {
        sh '''
          docker pull $IMAGE:$TAG
          docker rm -f chatbot-dev || true
          docker run -d --name chatbot-dev -p 8081:80 --restart=always $IMAGE:$TAG
        '''
      }
    }
    stage('Smoke test') {
      steps {
        sh 'sleep 3 && curl -fsS http://localhost:8081 > /dev/null && echo "App is up"'
      }
    }
  }

  post {
    success { echo "Deployed ${IMAGE}:${TAG} -> http://localhost:8081" }
    failure { echo 'Pipeline failed - open the red stage and read its log' }
    always  { sh 'docker image prune -f || true' }
  }
}