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
					junit 'test-results/**/*.xml'
				}
			}
        }

        stage('Deploy') {
			when {
				branch 'main'
			}
            steps {
				withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')])
				bat 'npx vercel --prod --confirm --token=$VERCEL_TOKEN'
            }
        }
	}
}
