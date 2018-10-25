FROM keymetrics/pm2:8-alpine

RUN mkdir -p /src/app/

WORKDIR /src/app/

COPY ./package.json /src/app/package.json

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install -g react-scripts \
    && npm install \
    && apk del .gyp

COPY . /src/app

CMD ["pm2-runtime", "start",  "npm", "--", "start"]