pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Clone Code') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm config set fetch-retry-mintimeout 20000'
                bat 'npm config set fetch-retry-maxtimeout 120000'
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-web-app:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying app...'
                bat 'docker stop my-web-app || exit 0'
                bat 'docker rm my-web-app || exit 0'
                bat 'docker run -d -p 3000:3000 --name my-web-app my-web-app:latest'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! App is live on port 3000.'
        }
        failure {
            echo 'Pipeline failed! Check the logs above.'
        }
    }
}