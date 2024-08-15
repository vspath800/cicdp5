FROM node:18.20-bullseye-slim
EXPOSE 8080
COPY server.js .
CMD node server.js
