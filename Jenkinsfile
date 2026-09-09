pipeline {
    agent any

    tools {
        nodejs 'Node26'
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Pulling Express code...'
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh '''
                if [ -d "express-frontend" ]; then
                    cd express-frontend
                    npm install
                else
                    npm install
                fi
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                if [ -d "express-frontend" ]; then
                    pm2 restart express || pm2 start express-frontend/app.js --name express
                else
                    pm2 restart express || pm2 start app.js --name express
                fi

                pm2 save
                pm2 list
                '''
            }
        }
    }
}
