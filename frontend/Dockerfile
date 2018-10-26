FROM keymetrics/pm2:8-alpine

RUN mkdir -p /src/app/

WORKDIR /src/app/

COPY ./package.json /src/app/package.json

COPY . /src/app

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install -g react-scripts \
    && npm install \
    && npm install -g serve \
    && npm run build \
    && apk del .gyp


CMD ["pm2-runtime", "start", "npm", "--", "run", "start-prod", "--"]
