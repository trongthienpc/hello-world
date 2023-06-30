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
                script {
                    def testResults = bat(returnStdout: true, script: 'npm test --json').trim()
                    writeFile file: 'test-results.json', text: testResults
                    def json = new groovy.json.JsonSlurper().parseText(testResults)
                    def testSuites = json.suites

                    // Count the number of failed test cases
                    def failedTests = testSuites.collectMany { suite ->
                        suite.cases.findAll { testCase ->
                            testCase.status == 'failed'
                        }
                    }

                    if (failedTests.isEmpty()) {
                        echo "All test cases passed. Proceeding to deployment..."
                        // Proceed to the deployment stage
                        build 'Deploy'
                    } else {
                        echo "Test cases failed! Cannot proceed with deployment."
                        // Alert about failed test cases or take appropriate actions
                    }
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
