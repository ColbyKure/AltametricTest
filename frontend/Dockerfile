# Step 1: Build the Vite application
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code into the container
COPY . .

# Build the Vite app
RUN npm run build

# Step 2: Use Nginx to serve the app
FROM nginx:alpine

# Copy the build from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port for Nginx
EXPOSE 80

# Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
