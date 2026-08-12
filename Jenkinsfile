pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                git clone https://github.com/Shibil-Basith/website-sample.git
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    rm -rf /var/www/html/*
                    cp -r website-sample/* /var/www/html/
                    '''
            }
        }
        }
    
}
