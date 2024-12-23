# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend app
RUN npm run dev

# Expose port 3000 for the app
EXPOSE 5000

# Start the frontend app
CMD ["npm", "run", "dev"]
