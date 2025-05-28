# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy app files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
