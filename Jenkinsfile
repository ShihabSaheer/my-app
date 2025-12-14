pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp"
        CONTAINER_NAME = "myapp"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                  docker rm -f ${CONTAINER_NAME} || true
                  docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
