FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port React runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .


# Expose the port React runs on
EXPOSE 3000

# Start the app
CMD ["npm","run", "start"]
