# Define a imagem base para o frontend
FROM node:14.17.0-alpine AS frontend

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "start"]


