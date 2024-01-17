FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    poppler-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app

RUN apt-get update && apt-get install -y nodejs npm
RUN yarn && yarn build

CMD ["yarn", "start"]