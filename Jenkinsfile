pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/rkadev/devops-todo-app.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t todo-app:v2 -f docker/Dockerfile .'
            }
        }

        stage('Save Image') {
            steps {
                sh 'docker save todo-app:v2 -o todo-app.tar'
            }
        }
    }
}
