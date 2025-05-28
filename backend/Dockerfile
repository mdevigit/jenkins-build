# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining source code
COPY . .

# Expose the port
EXPOSE 5000

# Command to start the server
CMD ["node", "server.js"]

