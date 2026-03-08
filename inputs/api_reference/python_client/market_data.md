# Market Data API

Client for market data API endpoints.

## Operations

| Client method | HTTP method | HTTP path | Request model | Response model |
| --- | --- | --- | --- | --- |
| `client.market_data.list()` | `GET` | `/api/market_data/` | `-` | `List[MasterMarketDataModel]` |
| `client.market_data.get()` | `GET` | `/api/market_data/{market_data_object_id}` | `-` | `List[MarketDataResponseModel]` |
| `client.market_data.create()` | `POST` | `/api/market_data/` | `CreateMarketDataObjectRequest` | `dict` |

## `list`

List all market data objects.

Returns
-------
    A list of MasterMarketDataModel instances representing all
    market data objects.

Raises
------
    requests.exceptions.RequestException: For network errors
    requests.exceptions.HTTPError: For HTTP error status codes

### Python call signature

`client.market_data.list() -> List[MasterMarketDataModel]`

### Endpoint mapping

`GET /api/market_data/`

### Parameters

No parameters.

### Request body model

None.

### Response model

`List[MasterMarketDataModel]`

### Raised errors

- `requests.exceptions.RequestException: For network errors`
- `requests.exceptions.HTTPError: For HTTP error status codes`

### Minimal usage example

```python
from axiomara_client import Client

client = Client(base_url="http://localhost:8000")
response = client.market_data.list()
print(response)
```

## `get`

Get market data for a specific market data object.

### Python call signature

`client.market_data.get(market_data_object_id: str) -> List[MarketDataResponseModel]`

### Endpoint mapping

`GET /api/market_data/{market_data_object_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `market_data_object_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`List[MarketDataResponseModel]`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from axiomara_client import Client

client = Client(base_url="http://localhost:8000")
response = client.market_data.get(market_data_object_id="MARKET_DATA_OBJECT_ID")
print(response)
```

## `create`

Create a new market data object.

### Python call signature

`client.market_data.create(request: CreateMarketDataObjectRequest) -> dict`

### Endpoint mapping

`POST /api/market_data/`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `request` | `CreateMarketDataObjectRequest` | Yes | `-` |

### Request body model

`CreateMarketDataObjectRequest`

### Response model

`dict`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from axiomara_client import Client
from axiomara_client.models import CreateMarketDataObjectRequest

client = Client(base_url="http://localhost:8000")
response = client.market_data.create(request=CreateMarketDataObjectRequest(...))
print(response)
```
