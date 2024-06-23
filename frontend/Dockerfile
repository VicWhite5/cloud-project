FROM node:18.20.3-alpine3.20 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install

FROM node:18.20.3-alpine3.20 as builder
WORKDIR /app
COPY . .
COPY --from=dev-deps /app/node_modules ./node_modules
RUN npm run test
RUN npm run build

FROM nginx:1.23.3 as prod
EXPOSE 80
ENV REACT_APP_RAMENS_API_URL=${REACT_APP_RAMENS_API_URL}
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf 
COPY nginx/nginx.conf /etc/nginx/conf.d 
CMD [ "nginx", "-g", "daemon off;"]