const os = require('os');

const envVariables = {
    serviceId : process.env.NAME || 'http-to-kafka',
    ver : process.env.VERSION || '1.0.0',

    kafkaHost: process.env.KAFKA_BROKER_LIST || 'localhost:9092',
    topic: process.env.KAFKA_TOPIC || 'whatsapp-received-messages',
    maxAsyncRequests: 100,
    keyForEachMessage : process.env.KAFKA_KEY_JSONPATH || undefined,      //In request body, single value

    contextPath: process.env.SERVER_CONTEXT_PATH || '/whatsapp-webhook',
    port: process.env.SERVER_PORT || 9001,
    endPoint : process.env.ENDPOINT || '/whatsapp/messages'
}
module.exports = envVariables;
