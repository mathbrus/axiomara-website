# DeepAlpha Research Python Client

Python client library for interacting with the DeepAlphaResearch API. This package provides a clean, Pythonic interface for all API endpoints with full type hints and Pydantic model validation.

## Mental Model

The package has three main concepts:

- **`Client`**: The entry point. Holds shared HTTP session/configuration.
- **`resources`**: Endpoint groups mounted on the client (`client.experiments`, `client.trials`, etc.).
  These methods perform API operations (`list`, `get`, `create`, `run`, ...).
- **`models`**: Pydantic classes for request payloads and typed responses.

Typical usage pattern:

1. Create a `Client`
2. Build request models (when needed)
3. Call resource methods
4. Work with typed response models (or `dict` for some create/ack responses)

## Installation

This package is typically built and installed locally. To install in a Jupyter notebook environment:

### Option 1: Install directly from the source directory

Navigate to the `client/python/` directory and install:

```bash
cd client/python
pip install .
```

### Option 2: Build a wheel and install it

Build a distribution package:

```bash
cd client/python
python setup.py sdist bdist_wheel
```

Then install the built wheel:

```bash
pip install dist/deepalpharesearch_client-*.whl
```

### Option 3: Install from Jupyter notebook

You can also install directly from a Jupyter notebook cell:

```python
import sys
!{sys.executable} -m pip install /path/to/client/python
```

**Note:** Replace `/path/to/client/python` with the actual path to the `client/python` directory.

## Quick Start

```python
from deepalpharesearch_client import Client
from deepalpharesearch_client.models import (
    ExperimentConfig,
    ExperimentsModel,
    BenchmarkPerformanceResponseModel,
)

# Initialize client
client = Client(base_url="http://localhost:8000")

# Build a typed request model
config = ExperimentConfig(
    number_of_trials=10,
    strategy_name="MyStrategy",
    strategy_version="1.0.0",
    strategy_parameters={"param1": [1, 2, 3]},
    trading_eac=[("binance", "BTC/USDT")],
    benchmark_eac=("binance", "BTC/USDT"),
    since="2024-01-01T00:00:00Z",
    until="2024-01-31T23:59:59Z",
    candle_interval="1h",
    portfolio_currency="USDT",
    initial_investment={"binance": 1000.0},
    backtesting_cycle_window=3600000,
    max_backtesting_cycles=1000,
)

# Call a resource method (returns an acknowledgement dict)
ack = client.experiments.create(config)
print(ack)

# Retrieve typed response models
experiments: list[ExperimentsModel] = client.experiments.list()
print(f"Found {len(experiments)} experiments")

# Another typed response example
metrics: list[BenchmarkPerformanceResponseModel] = (
    client.experiments.get_benchmark_metrics(experiment_id="exp_123")
)
print(f"Got {len(metrics)} benchmark points")
```

## Client Configuration

The `Client` class accepts optional parameters:

- `base_url` (str, optional): The base URL for the API. Defaults to `http://localhost:8000`
- `timeout` (int, optional): Request timeout in seconds. Defaults to 30

```python
client = Client(
    base_url="https://api.example.com",
    timeout=60
)
```

## API Resources

Resource clients are available as attributes on `Client`:

- `client.experiments`
- `client.market_data`
- `client.strategies`
- `client.trials`
- `client.agent`

Most `list()` / `get()` methods return typed Pydantic models.

- Example: `client.experiments.list() -> List[ExperimentsModel]`
- Example: `client.strategies.get(...) -> StrategyCodeModel`

Some `create()` methods return an acknowledgement `dict` from the API.

- Example: `client.experiments.create(...) -> dict`
- Example: `client.market_data.create(...) -> dict`
- Example: `client.strategies.create(...) -> dict`

## Models

All Pydantic models are included in the package (self-contained). You can import commonly used models directly:

```python
from deepalpharesearch_client import (
    Client,
    ExperimentConfig,
    ExperimentsModel,
    StrategiesModel,
    TrialsModel,
)
```

Or import specific models from the models module:

```python
from deepalpharesearch_client.models import (
    # Shared models
    ExperimentsModel,
    StrategiesModel,
    TrialsModel,
    MasterMarketDataModel,
    # Experiments
    ExperimentConfig,
    BenchmarkPerformanceResponseModel,
    # Market Data
    CreateMarketDataObjectRequest,
    MarketDataResponseModel,
    # Strategies
    StrategyConfig,
    StrategyCodeModel,
    # Trials
    TrialPerformanceModel,
    TrialOperationsModel,
    TrialLogsModel,
    TrialTracebackModel,
    # Agent
    AgentLogsModel,
    RunMetadataModel,
    AgentSessionMetadataModel,
)
```

## Error Handling

The client uses standard `requests` exceptions:

- `requests.exceptions.RequestException`: For network errors (connection issues, timeouts, etc.)
- `requests.exceptions.HTTPError`: For HTTP error status codes (4xx, 5xx)

Example:

```python
import requests

try:
    experiments = client.experiments.list()
except requests.exceptions.HTTPError as e:
    print(f"HTTP error: {e.response.status_code}")
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
```

## Agent Timeout Note

`client.agent.run(...)` supports a per-call timeout override and defaults to 300 seconds,
which is longer than the default client timeout (30 seconds). This is useful for
long-running LLM requests.

## Requirements

- Python >= 3.8
- requests >= 2.32.5
- pydantic >= 2.12.5
