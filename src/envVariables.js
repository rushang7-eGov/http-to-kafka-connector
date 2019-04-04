const os = require('os');

const envVariables = {
    serviceId : process.env.name || 'http-to-kafka',
    ver : process.env.version || '1.0.0',


    kafkaHost: process.env.kafka_broker_list || 'localhost:9092',
    topic: process.env.kafka_topic || 'whatsapp-received-messages',
    keyForEachMessage : process.env.keyPath || '$.sender.from',                //In request body, single value

    port: process.env.service_port || 9001,
    endPoint : process.env.endPoint || '/whatsapp/messages'
}
module.exports = envVariables;
