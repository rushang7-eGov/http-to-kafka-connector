const os = require('os');

const envVariables = {
    serviceId : process.env.name || 'http-to-kafka',
    ver : process.env.version || '1.0.0',

    kafkaHost: process.env.kafka_broker_list || 'localhost:9092',
    topic: process.env.kafka_topic || 'whatsapp-received-messages',
    maxAsyncRequests: 100,
    keyForEachMessage : process.env.keyPath || '$.eventContent.message.from',      //In request body, single value

    contextPath: process.env.contextPath || '/whatsapp-webhook',
    port: process.env.service_port || 9001,
    endPoint : process.env.endPoint || '/whatsapp/messages'
}
module.exports = envVariables;
