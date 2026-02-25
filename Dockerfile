# Step 1: Build the React app
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the built files from the builder stage to the Nginx server
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port 80 (default for Nginx)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]