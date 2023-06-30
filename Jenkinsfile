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
                bat 'npm test'
            }
			post {
				always { 
					junit 'test-results/junit.xml'
          cobertura 'coverage/lcov-report/cobertura-coverage.xml'
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
