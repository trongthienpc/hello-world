pipeline {
	agent any

	stages {
		stage('Install dependencies') {
			steps {
				bat 'npm install'
			}
		}

		stage('Test cases') {
			steps {
				bat 'npm run test'
			}
		}

		stage('Test cases') {
            steps {
                bat 'npm test -- --coverage --reporters=default --reporters=jest-junit'
            }
			post {
				always { 
					 junit 'coverage/lcov-report/*.xml' // Path to the generated JUnit XML report
				}
			}
        }

        stage('Deploy') {
            steps {
                echo "Deploying application..."
                // Add your deployment steps here
            }
        }
	}
}
