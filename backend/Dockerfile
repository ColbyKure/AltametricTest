# Use official Node.js as a parent image
FROM node:18

# Set the working directory for the backend
WORKDIR /backend

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the backend source code
COPY . .

# Add wait-for-it to the backend Docker image
RUN apt-get update && apt-get install -y curl
RUN curl -o /wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Generate Prisma client
RUN npx prisma generate

# Optionally, run database seeding
RUN npm run seed  # Make sure your seed script is correctly defined in package.json

# Build the application
RUN npm run build

# Expose port for backend
EXPOSE 5000

# Start the backend server (use production environment)
CMD ["npm", "run", "start:prod"]
