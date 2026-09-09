pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Pulling Express code...'
            }
        }

        stage('Install') {
            steps {
                sh 'cd express-frontend && npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 restart express || pm2 start "node express-frontend/app.js" --name express'
            }
        }
    }
}
