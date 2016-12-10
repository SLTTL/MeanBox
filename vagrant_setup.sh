#update packages#
sudo apt-get update
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
#sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
#install git#
sudo apt-get -y install git

#python packages#
sudo apt-get update

#python dev packages#
sudo apt-get -y install build-essential python3-dev 
sudo apt-get -y install python-software-properties python g++ make

#pip#
sudo apt-get -y install python3-setuptools
sudo apt-get -y install python3-pip

#websevrver#
sudo apt-get -y install apache2 apache2-dev

#node js#
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get -y install nodejs

#mongo db# 
sudo apt-get install -y mongodb-org
sudo apt-get update
#npm tools#
sudo npm install -g bower grunt-cli yo generator-meanjs express

echo "set up complete"
