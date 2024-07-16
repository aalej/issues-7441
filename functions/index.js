import { onRequest } from "firebase-functions/v2/https";
import { onMessagePublished } from "firebase-functions/v2/pubsub";
import { PubSub } from '@google-cloud/pubsub'

export const example = onMessagePublished(
    {
        topic: 'example',
        timeoutSeconds: 540,
        memory: '2GiB',
    },
    (event) => {
        console.log(`Publish time: ${event.data.message.publishTime}`); //1970/01/01 00:00:00
    },
);

export const publishMessage = onRequest(async (req, res) => {
    const pubSubClient = new PubSub()

    const [messageId] = await pubSubClient.topic('example').publishMessage({
        data: Buffer.from(JSON.stringify({ generateRun: true })),
    })

    res.send(`Message ID ${messageId}`)
})