#!/bin/sh
set -e

# Install frontend dependencies
cd frontend
npm install
cd ..

echo "Starting Docker containers..."
docker-compose -f docker-compose.dev.yml up --build
