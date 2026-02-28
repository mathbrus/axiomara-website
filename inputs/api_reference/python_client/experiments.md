# Experiments API

Client for experiments API endpoints.

## Operations

| Client method | HTTP method | HTTP path | Request model | Response model |
| --- | --- | --- | --- | --- |
| `client.experiments.list()` | `GET` | `/api/experiments/` | `-` | `List[ExperimentsModel]` |
| `client.experiments.create()` | `POST` | `/api/experiments/` | `ExperimentConfig` | `dict` |
| `client.experiments.get_benchmark_metrics()` | `GET` | `/api/experiments/metrics/benchmark/{experiment_id}` | `-` | `List[BenchmarkPerformanceResponseModel]` |

## `list`

List all experiments.

Returns
-------
    A list of ExperimentsModel instances representing all experiments.

Raises
------
    requests.exceptions.RequestException: For network errors
    requests.exceptions.HTTPError: For HTTP error status codes

### Python call signature

`client.experiments.list() -> List[ExperimentsModel]`

### Endpoint mapping

`GET /api/experiments/`

### Parameters

No parameters.

### Request body model

None.

### Response model

`List[ExperimentsModel]`

### Raised errors

- `requests.exceptions.RequestException: For network errors`
- `requests.exceptions.HTTPError: For HTTP error status codes`

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.experiments.list()
print(response)
```

## `create`

Create a new experiment.

### Python call signature

`client.experiments.create(config: ExperimentConfig) -> dict`

### Endpoint mapping

`POST /api/experiments/`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `config` | `ExperimentConfig` | Yes | `-` |

### Request body model

`ExperimentConfig`

### Response model

`dict`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client
from deepalpharesearch_client.models import ExperimentConfig

client = Client(base_url="http://localhost:8000")
response = client.experiments.create(config=ExperimentConfig(...))
print(response)
```

## `get_benchmark_metrics`

Get benchmark performance metrics for an experiment.

### Python call signature

`client.experiments.get_benchmark_metrics(experiment_id: str) -> List[BenchmarkPerformanceResponseModel]`

### Endpoint mapping

`GET /api/experiments/metrics/benchmark/{experiment_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `experiment_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`List[BenchmarkPerformanceResponseModel]`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.experiments.get_benchmark_metrics(experiment_id="EXPERIMENT_ID")
print(response)
```
