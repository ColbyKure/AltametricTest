# Use official Node.js as a parent image
FROM node:18

# Set the working directory for the backend
WORKDIR /backend

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the backend source code
COPY . .

RUN npx prisma generate
# RUN npx prisma migrate dev --name init
# RUN tsc src/prisma/seed.ts
# RUN node src/prisma/seed.js
RUN npm run build

EXPOSE 5173

# Start the backend server
CMD ["npm", "run", "start:prod"]
