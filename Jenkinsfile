pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                git clone https://github.com/abdulwajid-k/git-project.git
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    rm -rf /var/www/html/*
                    cp -r git-project/* /var/www/html/
                    '''
            }
        }
        }
    
}
