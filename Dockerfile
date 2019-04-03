FROM node:8.11-alpine
MAINTAINER "Mahesh" "mahesh@ilimi.in"
RUN apk update \
    && apk add unzip \
    && apk add curl \
    && adduser -u 1001 -h /home/push-to-kafka/ -D push-to-kafka \
    && apk add --update ca-certificates  \
    && apk add --update ca-certificates openssl
USER push-to-kafka
RUN mkdir -p /home/push-to-kafka/data
WORKDIR /home/push-to-kafka/data
COPY ./push-to-kafka.zip  /home/push-to-kafka/data/
RUN unzip /home/push-to-kafka/data/push-to-kafka.zip
RUN ls -all /home/push-to-kafka/data
WORKDIR /home/push-to-kafka/data/data
CMD ["node", "app.js", "&"]