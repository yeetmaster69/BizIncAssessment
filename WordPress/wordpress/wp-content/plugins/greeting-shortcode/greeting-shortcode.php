<?php

// Function that returns the greeting message
function greeting_shortcode() {
    return "Welcome to My Site!";
}

// Register the [greeting] shortcode
function register_greeting_shortcode() {
    add_shortcode('greeting', 'greeting_shortcode');
}

// Hook into WordPress initialization to register the shortcode
add_action('init', 'register_greeting_shortcode');

