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

		stage("Deploy application") {
			when {
				expression {
					def testResults = readJSON file: 'test.results.json' // Read and parse JSON directly
					def testSuites = testResults.suites
					def failedTests = testSuites.collectMany { suite ->
						suite.cases.findAll { testCase ->
							testCase.status == 'failed'
						}
					}
					failedTests.isEmpty()
				}
			}
			steps {
				echo "Deploying application ..."
				// Add your deployment steps here
			}
		}
	}
}
