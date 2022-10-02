FROM node:16

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
RUN npm install
RUN npm install typescript --location=global
COPY . /app/
RUN npm run build

COPY . /app/

RUN mkdir -p "data"
RUN touch data/data.json

EXPOSE 8887

CMD [ "node", "build/index" ]
