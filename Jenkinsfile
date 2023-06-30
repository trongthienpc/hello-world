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
				bat 'npm run test --json > test-results.json'
			}
		}

		stage("Deploy application") { 
			when {
				// Chỉ triển khai nếu tất cả các test case đều thành công
				allOf {
				// Kiểm tra kết quả test
				script {
					def testResults = readFile 'test-results.json'
					def json = new groovy.json.JsonSlurper().parseText(testResults)
					def testSuites = json.suites

					// Đếm số lượng test cases không thành công
					def failedTests = testSuites.collect { suite ->
					suite.cases.findAll { testCase ->
						testCase.status == 'failed'
					}
					}.flatten()

					// Nếu không có test case nào không thành công, triển khai
					return failedTests.isEmpty()
				}
				}
			}
			steps {
				// Các bước triển khai ở đây
				echo "Deploying application ... "
			}
		}
	
	}
}
