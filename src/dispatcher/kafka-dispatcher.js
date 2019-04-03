const kafka = require('kafka-node'),
    _ = require('lodash'),
    HighLevelProducer = kafka.HighLevelProducer;

class KafkaDispatcher {
    constructor(options) {
        this.name = 'kafka';
        this.options = options;
        this.client = new kafka.KafkaClient({
            kafkaHost: this.options.kafkaHost
        })
        this.producer = new HighLevelProducer(this.client);
        this.producer.on('ready', () => console.log('kafka dispatcher is ready'));
        this.producer.on('error', (err) => console.error('Unable to connect to kafka', err));
    }
    dispatch(key, message, callback) {
        this.producer.send([{
            topic: this.options.topic,
            key: key,
            messages: message
        }], callback);
    }
    health(callback) {
        this.client.topicExists(this.options.topic, (err) => {
            if (err) callback(false);
            else callback(true);
        });
    }
}

module.exports = { KafkaDispatcher };
