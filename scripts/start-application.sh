#!/bin/bash
echo "Starting the Node.js application..."
pm2 start /opt/healthcare-app/backend/app.js --name healthcare-app
