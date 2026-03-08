# Strategies API

Client for strategies API endpoints.

## Operations

| Client method | HTTP method | HTTP path | Request model | Response model |
| --- | --- | --- | --- | --- |
| `client.strategies.list()` | `GET` | `/api/strategies/` | `-` | `List[StrategiesModel]` |
| `client.strategies.get()` | `GET` | `/api/strategies/{strategy_name}/{strategy_version}` | `-` | `StrategyCodeModel` |
| `client.strategies.create()` | `POST` | `/api/strategies/` | `StrategyConfig` | `dict` |

## `list`

List all strategies.

Returns
-------
    A list of StrategiesModel instances representing all strategies.

Raises
------
    requests.exceptions.RequestException: For network errors
    requests.exceptions.HTTPError: For HTTP error status codes

### Python call signature

`client.strategies.list() -> List[StrategiesModel]`

### Endpoint mapping

`GET /api/strategies/`

### Parameters

No parameters.

### Request body model

None.

### Response model

`List[StrategiesModel]`

### Raised errors

- `requests.exceptions.RequestException: For network errors`
- `requests.exceptions.HTTPError: For HTTP error status codes`

### Minimal usage example

```python
from axiomara_client import Client

client = Client(base_url="http://localhost:8000")
response = client.strategies.list()
print(response)
```

## `get`

Get strategy code for a specific strategy.

### Python call signature

`client.strategies.get(strategy_name: str, strategy_version: str) -> StrategyCodeModel`

### Endpoint mapping

`GET /api/strategies/{strategy_name}/{strategy_version}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `strategy_name` | `str` | Yes | `-` |
| `strategy_version` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`StrategyCodeModel`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from axiomara_client import Client

client = Client(base_url="http://localhost:8000")
response = client.strategies.get(strategy_name="example_strategy_name", strategy_version="example_strategy_version")
print(response)
```

## `create`

Create a new strategy.

### Python call signature

`client.strategies.create(config: StrategyConfig) -> dict`

### Endpoint mapping

`POST /api/strategies/`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `config` | `StrategyConfig` | Yes | `-` |

### Request body model

`StrategyConfig`

### Response model

`dict`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from axiomara_client import Client
from axiomara_client.models import StrategyConfig

client = Client(base_url="http://localhost:8000")
response = client.strategies.create(config=StrategyConfig(...))
print(response)
```
