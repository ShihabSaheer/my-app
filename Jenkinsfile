pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                  docker ps -q --filter "name=$IMAGE_NAME" | grep -q . && docker rm -f $IMAGE_NAME || true
                  docker run -d -p 3000:3000 --name $IMAGE_NAME $IMAGE_NAME:latest
                '''
            }
        }
    }
}
