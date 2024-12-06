#!/bin/bash
echo "Stopping the Node.js server..."
pm2 stop healthcare-app || true
