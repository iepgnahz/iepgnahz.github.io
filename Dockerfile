FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
CMD [ "sleep", "500000" ]
