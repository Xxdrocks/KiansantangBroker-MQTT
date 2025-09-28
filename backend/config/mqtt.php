<?php
return [
    'host' => env('MQTT_HOST', '127.0.0.1'),
    'port' => env('MQTT_PORT', 1883),
    'user' => env('MQTT_USER', null),
    'pass' => env('MQTT_PASS', null),
    'topic' => env('MQTT_TOPIC', 'sensors/temperature'),
];
