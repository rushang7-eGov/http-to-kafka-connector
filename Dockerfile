FROM node:8.11-alpine
MAINTAINER "Mahesh" "mahesh@ilimi.in"
RUN apk update \
    && apk add unzip \
    && apk add curl \
    && adduser -u 1001 -h /home/http-to-kafka/ -D http-to-kafka \
    && apk add --update ca-certificates  \
    && apk add --update ca-certificates openssl
USER http-to-kafka
RUN mkdir -p /home/http-to-kafka/data
WORKDIR /home/http-to-kafka/data
COPY ./http-to-kafka.zip  /home/http-to-kafka/data/
RUN unzip /home/http-to-kafka/data/http-to-kafka.zip
RUN ls -all /home/http-to-kafka/data
WORKDIR /home/http-to-kafka/data/data
CMD ["node", "app.js", "&"]