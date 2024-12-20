#!/bin/bash

# Update and Upgrade Ubuntu
echo "Updating and upgrading Ubuntu..."
sudo apt update && sudo apt upgrade -y

# Install Node.js
echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
echo "Installing PM2..."
sudo npm install -g npm@10

sudo apt install certbot python3-certbot-nginx -y
#sudo certbot --nginx -d api.macbease.com -d www.api.macbease.com

# Install Nginx
echo "Installing Nginx..."
sudo apt install nginx -y

source ~/.bashrc

# Configure Nginx for Port Forwarding (5050 -> 80)
#echo "Configuring Nginx for port forwarding..."
#sudo bash -c 'cat > /etc/nginx/sites-available/default <<EOF
#server {
 #   listen 80;
  #  server_name macbease.com admin.macbease.com doc.macbease.com backend.macbease.com;
#
 #   location / {
 #       proxy_pass http://localhost:3000;
 #      proxy_http_version 1.1;
 #       proxy_set_header Upgrade \$http_upgrade;
 #       proxy_set_header Connection "upgrade";
  #      proxy_set_header Host \$host;
  #      proxy_cache_bypass \$http_upgrade;
  #  }
#}
#EOF'

# Test Nginx Configuration
#echo "Testing Nginx configuration..."
#sudo nginx -t

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "Setup complete!"
