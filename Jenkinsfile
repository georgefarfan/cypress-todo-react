pipeline {
    agent {
        docker {
            image 'cypress/base:16.13.0'
        }
    }
}

stages {
    stage('Download the dependencies ....') {
        steps {
            sh  "npm install"
        }
    }
 
    stage('Build and test ....') {
        steps {
            sh  "npm build:and:test"
        }
    }
}