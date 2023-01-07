const { WebhookClient } = require('discord.js');
const rl = require('readline-sync');

let webhook_url = rl.question('Webhook URL: ');
let message = rl.question('Message: ');
let count = rl.question('Count: ');

if (!webhook_url.includes('discord.com/api/webhooks/')) {
    console.log('Invalid webhook URL');
    process.exit(1);
}

let webhook = new WebhookClient({ url: webhook_url });

for (let i = 0; i < count; i++) {
    try {
        webhook.send({ content: message })
        console.log(`Sent message ${i + 1} of ${count}`);
    } catch (e) {
        console.log(e);
    }
}