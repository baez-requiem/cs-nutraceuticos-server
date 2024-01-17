FROM ubuntu:latest

RUN apt-get update && apt-get install -y curl software-properties-common

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

RUN apt-get update && apt-get install -y \
    poppler-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]