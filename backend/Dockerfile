# Base image for the build that we are using
FROM node:19-alpine
# Set working directory to /app
# Docker will use this path for all the following commands
WORKDIR /app
# Copy package.json and package-lock.json in /app
COPY package*.json ./
# Run the command "npm install" inside of the container
RUN npm install
# Copy all files from the host machine to the workdir
COPY . .
# Expose port 3000
EXPOSE 3000
# Set the command "npm start" that start the application
CMD ["npm", "start"]