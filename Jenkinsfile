pipeline {
	agent any

	stages {
		stage ('build') {
			steps {
				bat 'npm install'
			}
		}

		stage ('Test') {
			steps {
				bat 'start npm run test'

			}
		}
	}
}
