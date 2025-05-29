// Jenkinsfile at root of your repo
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Lint Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run lint'
                }
            }
        }

        stage('Test Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run test'
                }
            }
        }

        stage('Lint Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run lint'
                }
            }
        }

        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm run test'
                }
            }
        }

        stage('Build Verification') {
            steps {
                sh 'docker-compose up -d'
                sh 'docker ps'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up containers...'
            sh 'docker-compose down'
        }
    }
}
