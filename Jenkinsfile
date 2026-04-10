pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/rkadev/devops-todo-app.git',
                    credentialsId: 'GITHUB_CREDENTIALS'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}
