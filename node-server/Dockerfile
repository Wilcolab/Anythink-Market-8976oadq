FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN yarn install --frozen-lockfile || npm install

COPY . .

EXPOSE 8001

CMD ["yarn", "start"]
