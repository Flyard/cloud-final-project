# Base image
FROM node:14.17-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 5173
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]
