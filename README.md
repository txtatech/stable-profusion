## stable-profusion

A low memory overlay and web browser for working with local instances of stable-diffusion-webui.

This application acts as an overlay that can load multiple iframes (one below the other) on the main page for specified urls.

There are various navigation and web browsing features but please note that not all features will work on all platforms. 

There is a + Prompt, - Prompt, and 'scratch pad' text area below where the iframes are loaded.

The search feature resolves to https://search.brave.com

Stable-Profusion is a web view application written in Rust. It allows you to create a simple web view window and interact with web content using JavaScript.

It is designed to work with [https://github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui).

### Prerequisites:

rustc 1.72.0-nightly (d9c13cd45 2023-07-05)

- Rust toolchain nightly-x86_64-unknown-linux-gnu (default)
- rustc 1.72.0-nightly (d9c13cd45 2023-07-05)



### Installation and Running:

1. Clone the Stable-Profusion repository:


   git clone https://github.com/txtatech/stable-profusion.git

Navigate to the project directory:

cd stable-profusion

Build and run the application using Cargo:

cargo +nightly run --release

This will compile and launch the web view application.

### Dependencies:

The Stable-Profusion program uses the following external crates:

web-view: A Rust library for building web view applications.
The dependencies are specified in the Cargo.toml file and will be automatically fetched and built by Cargo.

### Additional Notes:

The code was written and tested with the specified Rust toolchain version.

![Example Image 1](https://github.com/txtatech/stable-profusion/blob/main/s-p-Example-1.png)
![Example Image 2](https://github.com/txtatech/stable-profusion/blob/main/s-p-Example-2.png)

![Small Window Example Image 1](https://github.com/txtatech/stable-profusion/blob/main/s-p1.png)
![Small Window Example Image 2](https://github.com/txtatech/stable-profusion/blob/main/s-p2.png)

For more information about Stable-Profusion and its usage, please refer to the GitHub repository.

[https://github.com/txtatech/stable-profusion](https://github.com/txtatech/stable-profusion),
