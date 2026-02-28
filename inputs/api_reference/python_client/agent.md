# Agent API

Client for agent API endpoints.

## Operations

| Client method | HTTP method | HTTP path | Request model | Response model |
| --- | --- | --- | --- | --- |
| `client.agent.run()` | `POST` | `/api/agent/run` | `AgentRunRequest` | `AgentRunResponse` |
| `client.agent.accept()` | `POST` | `/api/agent/accept` | `AgentAcceptRequest` | `AgentAcceptResponse` |
| `client.agent.get_logs()` | `GET` | `/api/agent/logs/{session_id}` | `-` | `AgentLogsModel` |
| `client.agent.get_metadata()` | `GET` | `/api/agent/metadata/{session_id}` | `-` | `AgentSessionMetadataModel` |
| `client.agent.list_sessions()` | `GET` | `/api/agent/sessions/` | `-` | `List[AgentSessionsModel]` |
| `client.agent.get_session()` | `GET` | `/api/agent/sessions/{session_id}` | `-` | `AgentSessionsModel` |

## `run`

Run a single iteration of the agent.

### Python call signature

`client.agent.run(request: AgentRunRequest, timeout: int = 300) -> AgentRunResponse`

### Endpoint mapping

`POST /api/agent/run`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `request` | `AgentRunRequest` | Yes | `-` |
| `timeout` | `int` | No | `300` |

### Request body model

`AgentRunRequest`

### Response model

`AgentRunResponse`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client
from deepalpharesearch_client.models import AgentRunRequest

client = Client(base_url="http://localhost:8000")
response = client.agent.run(request=AgentRunRequest(...), timeout=300)
print(response)
```

## `accept`

Accept the agent's result and save it as a strategy.

### Python call signature

`client.agent.accept(request: AgentAcceptRequest) -> AgentAcceptResponse`

### Endpoint mapping

`POST /api/agent/accept`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `request` | `AgentAcceptRequest` | Yes | `-` |

### Request body model

`AgentAcceptRequest`

### Response model

`AgentAcceptResponse`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client
from deepalpharesearch_client.models import AgentAcceptRequest

client = Client(base_url="http://localhost:8000")
response = client.agent.accept(request=AgentAcceptRequest(...))
print(response)
```

## `get_logs`

Get agent logs for a given session.

### Python call signature

`client.agent.get_logs(session_id: str) -> AgentLogsModel`

### Endpoint mapping

`GET /api/agent/logs/{session_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `session_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`AgentLogsModel`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.agent.get_logs(session_id="SESSION_ID")
print(response)
```

## `get_metadata`

Get aggregated metadata for an agent session.

This method parses session logs to extract run-level metadata,
then aggregates across all runs to provide session-level totals.

### Python call signature

`client.agent.get_metadata(session_id: str) -> AgentSessionMetadataModel`

### Endpoint mapping

`GET /api/agent/metadata/{session_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `session_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`AgentSessionMetadataModel`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.agent.get_metadata(session_id="SESSION_ID")
print(response)
```

## `list_sessions`

List all agent sessions.

Returns
-------
    A list of AgentSessionsModel instances representing all agent sessions.

Raises
------
    requests.exceptions.RequestException: For network errors
    requests.exceptions.HTTPError: For HTTP error status codes

### Python call signature

`client.agent.list_sessions() -> List[AgentSessionsModel]`

### Endpoint mapping

`GET /api/agent/sessions/`

### Parameters

No parameters.

### Request body model

None.

### Response model

`List[AgentSessionsModel]`

### Raised errors

- `requests.exceptions.RequestException: For network errors`
- `requests.exceptions.HTTPError: For HTTP error status codes`

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.agent.list_sessions()
print(response)
```

## `get_session`

Get a specific agent session.

### Python call signature

`client.agent.get_session(session_id: str) -> AgentSessionsModel`

### Endpoint mapping

`GET /api/agent/sessions/{session_id}`

### Parameters

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `session_id` | `str` | Yes | `-` |

### Request body model

None.

### Response model

`AgentSessionsModel`

### Raised errors

- `requests.exceptions.RequestException` - For network errors
- `requests.exceptions.HTTPError` - For HTTP error status codes

### Minimal usage example

```python
from deepalpharesearch_client import Client

client = Client(base_url="http://localhost:8000")
response = client.agent.get_session(session_id="SESSION_ID")
print(response)
```
