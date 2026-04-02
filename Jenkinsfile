pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/RajVishal7/devops-industry-project.git'
            }
        }

        stage('Build & Run') {
            steps {
                sh '''
                docker-compose down || true
                docker-compose up --build -d
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}