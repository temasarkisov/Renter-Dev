FROM node:18-alpine

# add python
# RUN apk add --no-cache --virtual .gyp python3 make g++

# support OpenSSL provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# make the 'app' folder the current working directory
WORKDIR /app/

# copy both 'package.json' and 'package-lock.json' (if available)
COPY frontend/package*.json ./

# install dependencies
RUN npm install

# build app for production with minification
WORKDIR /app/frontend

EXPOSE 3000
# see frontend/package.json:: "scripts": "dev" block
CMD ["npm", "run", "dev"]
