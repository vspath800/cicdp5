FROM node:22
EXPOSE 8080
COPY server.js .
CMD node server.js
