# Base image that we are using for the application
FROM node:18-alpine
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json in the current workdir
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy all files from the host machine to the workdir
COPY . .
# Expose port 5173
EXPOSE 5173
# Set the command "npm run dev" that start the application
CMD ["npm", "run", "dev"]