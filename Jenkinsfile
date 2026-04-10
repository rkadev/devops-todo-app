pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "rkadev/todo-app:v1"
    }

    stages {

        stage('Clean') {
            steps {
                cleanWs()
            }
        }

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                url: 'https://github.com/rkadev/devops-todo-app.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'DOCKERHUB_CREDENTIALS',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl rollout restart deployment todo-app'
            }
        }
    }
}
