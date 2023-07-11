## stable-profusion

A low memory overlay and web browser for working with local instances of stable-diffusion.

Stable-Profusion is a web view application written in Rust. It allows you to create a simple web view window and interact with web content using JavaScript.

### Prerequisites

- Rust toolchain nightly-x86_64-unknown-linux-gnu (default)
- rustc 1.72.0-nightly (d9c13cd45 2023-07-05)

### Installation and Running

1. Clone the Stable-Profusion repository:


   git clone https://github.com/txtatech/stable-profusion.git

Navigate to the project directory:

cd stable-profusion

Build and run the application using Cargo:

cargo +nightly run --release

This will compile and launch the web view application.

Dependencies

The Stable-Profusion program uses the following external crates:

web-view: A Rust library for building web view applications.
The dependencies are specified in the Cargo.toml file and will be automatically fetched and built by Cargo.

Additional Notes
The code was written and tested with the specified Rust toolchain version.

For more information about Stable-Profusion and its usage, please refer to the GitHub repository.

https://github.com/txtatech/stable-profusion
