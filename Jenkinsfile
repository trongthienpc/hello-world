pipeline {
	agent any

	stages {
		

		stage('Checkout and merge branch') {
			// Checkout main branch
          	checkout([$class: 'GitSCM', branches: [[name: '*/main']]])

			// Merge 'develop' into 'main'
			script {
				try {
					bat 'git merge origin/develop'
				} catch (err) {
					// Merge conflict occurred
					echo "Merge conflict detected! Please resolve the conflicts and try again."
					currentBuild.result = 'FAILURE'
					error("Merge conflict detected")
				}
			}
		}

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
        
	}
}
