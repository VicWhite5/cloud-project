FROM node:18.20.3-alpine3.20 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

FROM node:18.20.3-alpine3.20 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn test
RUN yarn build

FROM node:18.20.3-alpine3.20 as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile

FROM node:18.20.3-alpine3.20 as prod
EXPOSE 3000
WORKDIR /app
ENV DB_HOSTS=${DB_HOSTS}
ENV DB_NAME=${DB_NAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV CONTAINER=${CONTAINER}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]
