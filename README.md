# Repro for issue 7441

## Versions

firebase-tools: v13.13.3<br>
platform: macOS Sonoma 14.5<br>
node: v20.12.2

## Steps to reproduce

1. Run `npm i`
2. Run `firebase emulators:start --project demo-project`
3. Invoke the function "http://127.0.0.1:5001/demo-project/us-central1/publishMessage"
   - You can open the link on a browser, or use curl
4. Outputs from the logs indicate that publish time is "1970-01-01T00:00:00.514Z"

```
✔  functions[us-central1-example]: pubsub function initialized.
✔  functions[us-central1-publishMessage]: http function initialized (http://127.0.0.1:5001/demo-project/us-central1/publishMessage).

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌───────────┬────────────────┬─────────────────────────────────┐
│ Emulator  │ Host:Port      │ View in Emulator UI             │
├───────────┼────────────────┼─────────────────────────────────┤
│ Functions │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions │
├───────────┼────────────────┼─────────────────────────────────┤
│ Pub/Sub   │ 127.0.0.1:8085 │ n/a                             │
└───────────┴────────────────┴─────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500

Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.

i  functions: Beginning execution of "us-central1-publishMessage"
i  functions: Finished "us-central1-publishMessage" in 70.987458ms
i  functions: Beginning execution of "us-central1-example"
>  Publish time: 1970-01-01T00:00:00.514Z
i  functions: Finished "us-central1-example" in 4.986083ms
```
