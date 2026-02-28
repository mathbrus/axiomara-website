Use the Python Client when you want a convenient SDK interface for scripts,
notebooks, and strategy automation pipelines.

## Install and import

- Install: `pip install <package-name>`
- Import pattern: `from <package_name> import Client`

## Initialize and authenticate

- Create a client with your API base URL and credentials/token.
- Reuse one client instance across calls to benefit from consistent configuration.

## Usage model

- Methods map to the same core capabilities exposed by the REST API.
- Refer to method docs for parameter schemas, return models, and error behavior.

For protocol-level control or non-Python integrations, use the REST API reference.
