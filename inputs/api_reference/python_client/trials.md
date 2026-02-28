# Trials API

Client for trials API endpoints.

## Operations

| Client method | HTTP method | HTTP path | Request model | Response model |
| --- | --- | --- | --- | --- |
| `client.trials.list()` | `GET` | `/api/trials/{experiment_id}` | `-` | `List[TrialsModel]` |
| `client.trials.get_performance_metrics()` | `GET` | `/api/trials/metrics/performance/{trial_id}` | `-` | `List[TrialPerformanceModel]` |
| `client.trials.get_operations_metrics()` | `GET` | `/api/trials/metrics/operations/{trial_id}` | `-` | `List[TrialOperationsModel]` |
| `client.trials.get_logs()` | `GET` | `/api/trials/logs/{trial_id}` | `-` | `TrialLogsModel` |
| `client.trials.get_traceback()` | `GET` | `/api/trials/traceback/{trial_id}` | `-` | `Optional[TrialTracebackModel]` |

## `list`

List all trials for an experiment.

### Python call signature

`client.trials.list(experiment_id: str) -> List[TrialsModel]`

### Endpoint mapping

`GET /api/trials/{experiment_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `experiment_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`List[TrialsModel]`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.trials.list(experiment_id="EXPERIMENT_ID")
print(response)
```

## `get_performance_metrics`

Get performance metrics for a trial.

### Python call signature

`client.trials.get_performance_metrics(trial_id: str) -> List[TrialPerformanceModel]`

### Endpoint mapping

`GET /api/trials/metrics/performance/{trial_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `trial_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`List[TrialPerformanceModel]`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.trials.get_performance_metrics(trial_id="TRIAL_ID")
print(response)
```

## `get_operations_metrics`

Get operations metrics for a trial.

### Python call signature

`client.trials.get_operations_metrics(trial_id: str) -> List[TrialOperationsModel]`

### Endpoint mapping

`GET /api/trials/metrics/operations/{trial_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `trial_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`List[TrialOperationsModel]`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.trials.get_operations_metrics(trial_id="TRIAL_ID")
print(response)
```

## `get_logs`

Get logs for a trial.

### Python call signature

`client.trials.get_logs(trial_id: str) -> TrialLogsModel`

### Endpoint mapping

`GET /api/trials/logs/{trial_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `trial_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`TrialLogsModel`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.trials.get_logs(trial_id="TRIAL_ID")
print(response)
```

## `get_traceback`

Get traceback for a trial.

This endpoint can return None if the trial doesn't have a
traceback (404 status code).

### Python call signature

`client.trials.get_traceback(trial_id: str) -> Optional[TrialTracebackModel]`

### Endpoint mapping

`GET /api/trials/traceback/{trial_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `trial_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`Optional[TrialTracebackModel]`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes
- `other than 404`

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.trials.get_traceback(trial_id="TRIAL_ID")
print(response)
```
