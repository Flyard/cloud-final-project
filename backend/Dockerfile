FROM node:14-alpine

WORKDIR /app

COPY package*.json  ./

# Install dependencies
RUN npm install

# Copy source code to working directory
COPY . .

# Expose port 5000 for the backend
EXPOSE 9000

# Start the backend server

CMD [ "npm", "start" ]
