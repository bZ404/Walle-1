1. Sinup Github Account, please rember your github user name
https://github.com/

2. Install Git command line & Github Windows desktop
3. Open Git bash command line and type below command to generate a SSH key
ssh-keygen -t rsa
4. Copy the public key from folder "c:/Users/Administrator/.ssh/id_rsa.pub)
5. Login to github by your account, click "Settings" from your account(the user profile icon), then click "SSH and GPG keys"
6. Click "New SSH key", then paste the ssh public key to "Key" text filed, then click "Add SSH key" button.
7. Open Git bash, and type below command to configure your github account, please replace your email address.
git config --global user.email "<your email address>"
8. Ask conchain github admin to add your github account as a "Collaborators"

