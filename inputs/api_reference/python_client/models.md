# Models

Request and response models grouped by resource.

## Agent

### `LLMRunConfig`

LLM configuration for a specific agent run.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `model` | `str` | Yes | `required` | Model name (e.g., 'gpt-5-nano', 'mock-model') |
| `temperature` | `float` | No | `0.2` | Temperature setting |
| `responses` | `Optional[List[str]]` | No | `None` | Mock LLM responses (for testing) |

### `AgentRunRequest`

Request model for agent run with explicit scenario validation.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `scenario` | `Optional[Literal['new_strategy', 'existing_strategy']]` | No | `None` | The scenario type: 'new_strategy' for generating new strategies, 'existing_strategy' for modifying existing strategies |
| `session_id` | `Optional[str]` | No | `None` | Session ID for continuing an existing session. If not provided, a new session is created. |
| `investment_committee_instructions` | `Optional[str]` | No | `None` | Investment committee guidance (new strategy scenario only) |
| `user_instructions` | `Optional[str]` | No | `None` | User instructions for strategy generation or modification |
| `code` | `Optional[str]` | No | `None` | Strategy code (required for existing_strategy, optional for new_strategy refinement) |
| `stack_trace` | `Optional[str]` | No | `None` | Python stacktrace from trial failure (existing_strategy scenario) |
| `metrics` | `Optional[Dict[str, Any]]` | No | `None` | Trial execution metrics (existing_strategy scenario) |
| `trial_id` | `Optional[str]` | No | `None` | Trial ID (required for existing_strategy scenario) |
| `strategy_name` | `Optional[str]` | No | `None` | Strategy name (required for existing_strategy scenario) |
| `llm_config` | `LLMRunConfig` | Yes | `required` | LLM configuration for this run (model, temperature, and optional responses). |

### `AgentRunResponse`

Response model for agent run.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `session_id` | `str` | Yes | `-` | - |
| `run_number` | `int` | Yes | `-` | - |
| `code` | `Optional[str]` | No | `None` | - |
| `status` | `str` | Yes | `-` | - |
| `error_message` | `Optional[str]` | No | `None` | - |

### `AgentAcceptRequest`

Request model for accepting agent result.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `session_id` | `str` | Yes | `required` | Session ID of the agent run to accept |

### `AgentAcceptResponse`

Response model for accepting agent result.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `status` | `str` | Yes | `-` | - |

### `AgentLogsModel`

Model for agent session logs (session-level).

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `logs` | `str` | Yes | `-` | - |

### `RunMetadataModel`

Model for a single run's metadata (run-level).

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `run_number` | `int` | Yes | `-` | - |
| `started_at` | `str` | Yes | `-` | - |
| `completed_at` | `str` | Yes | `-` | - |
| `duration_seconds` | `float` | Yes | `-` | - |
| `aggregate_metrics` | `Dict[str, Any]` | Yes | `-` | - |
| `llm_calls` | `Optional[List[Dict[str, Any]]]` | No | `None` | - |
| `llm_config` | `Dict[str, Any]` | Yes | `-` | - |

### `AgentSessionMetadataModel`

Model for aggregated agent session metadata (with run-level breakdown).

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `session_id` | `str` | Yes | `-` | - |
| `total_runs` | `int` | Yes | `-` | - |
| `total_input_tokens` | `int` | Yes | `-` | - |
| `total_output_tokens` | `int` | Yes | `-` | - |
| `total_tokens` | `int` | Yes | `-` | - |
| `total_llm_calls` | `int` | Yes | `-` | - |
| `total_nodes_executed` | `int` | Yes | `-` | - |
| `total_duration_seconds` | `float` | Yes | `-` | - |
| `total_code_validation_attempts` | `int` | Yes | `-` | - |
| `runs` | `List[RunMetadataModel]` | Yes | `-` | - |

### `AgentSessionsModel`

Model for the agent_sessions table.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `str` | Yes | `required` | - |
| `scenario` | `str` | Yes | `required` | - |
| `status` | `str` | Yes | `required` | - |
| `number_of_runs` | `int` | Yes | `required` | - |
| `current_code` | `Optional[str]` | No | `None` | - |
| `previous_codes` | `str` | Yes | `required` | - |
| `previous_user_instructions` | `str` | Yes | `required` | - |
| `investment_committee_instructions` | `Optional[str]` | No | `None` | - |
| `stack_trace` | `Optional[str]` | No | `None` | - |
| `metrics` | `Optional[str]` | No | `None` | - |
| `trial_id` | `Optional[str]` | No | `None` | - |
| `created_at` | `datetime` | Yes | `required` | - |
| `updated_at` | `datetime` | Yes | `required` | - |

## Experiments

### `ExperimentConfig`

Configuration model for experiments creation.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `number_of_trials` | `int` | Yes | `required` | Number of trials to run |
| `strategy_name` | `str` | Yes | `required` | Strategy class name |
| `strategy_version` | `str` | Yes | `required` | Strategy version |
| `strategy_parameters` | `Dict[str, List[Union[str, int, float, bool, list]]]` | Yes | `required` | Strategy parameters |
| `trading_eac` | `List[tuple[str, str]]` | Yes | `required` | Exchange-asset combinations that are relevant for trading |
| `benchmark_eac` | `tuple[str, str]` | Yes | `required` | Exchange-asset combination that is used as benchmark |
| `since` | `str` | Yes | `required` | Start time in ISO8601 format |
| `until` | `str` | Yes | `required` | End time in ISO8601 format |
| `candle_interval` | `str` | Yes | `required` | Candle interval (e.g., '1m', '1h') |
| `portfolio_currency` | `str` | Yes | `required` | Portfolio currency |
| `initial_investment` | `Dict[str, float]` | Yes | `required` | Initial investment per exchange in the portfolio currency |
| `backtesting_cycle_window` | `int` | Yes | `required` | Backtesting cycle window in milliseconds |
| `max_backtesting_cycles` | `int` | Yes | `required` | Maximum number of backtesting cycles |
| `test_market_data_objects_ids` | `Union[List[str], None]` | No | `None` | List of market data objects ids to use for testing. |
| `test_benchmark_market_data_id` | `Union[str, None]` | No | `None` | Market data object id to use for testing. |

### `BenchmarkPerformanceResponseModel`

API response model for benchmark performance metrics.
We need to convert the timestamp to milliseconds since
the database stores it as a datetime object.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `timestamp` | `int` | Yes | `-` | - |
| `portfolio_value` | `float` | Yes | `-` | - |
| `roi` | `float` | Yes | `-` | - |
| `net_profit` | `float` | Yes | `-` | - |

### `ExperimentsModel`

Model for the experiments table.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `str` | Yes | `required` | - |
| `strategy_name` | `str` | Yes | `required` | - |
| `strategy_version` | `str` | Yes | `required` | - |
| `num_trials` | `int` | Yes | `required` | - |
| `created_at` | `datetime` | Yes | `required` | - |
| `completed_at` | `Optional[datetime]` | No | `None` | - |
| `status` | `str` | Yes | `required` | - |
| `benchmark_market_data_id` | `str` | Yes | `required` | - |
| `required_market_data_ids` | `str` | Yes | `required` | - |
| `config` | `str` | Yes | `required` | - |
| `since` | `str` | Yes | `required` | - |
| `until` | `str` | Yes | `required` | - |

## Market Data

### `CreateMarketDataObjectRequest`

Request model for market data object creation.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `exchange` | `str` | Yes | `required` | Exchange name |
| `pair` | `str` | Yes | `required` | Trading pair |
| `since` | `str` | Yes | `required` | Start time for data download in ISO 8601 format. |
| `until` | `str` | Yes | `required` | End time for data download in ISO 8601 format. |
| `candle_interval` | `str` | Yes | `required` | Candle interval |

### `MarketDataResponseModel`

API response model for market data.
We need to convert the timestamp to milliseconds since
the database stores it as a datetime object.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `timestamp` | `int` | Yes | `-` | - |
| `open` | `float` | Yes | `-` | - |
| `high` | `float` | Yes | `-` | - |
| `low` | `float` | Yes | `-` | - |
| `close` | `float` | Yes | `-` | - |
| `volume` | `float` | Yes | `-` | - |

### `MasterMarketDataModel`

Model for master market data table.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `str` | Yes | `required` | - |
| `table_id` | `str` | Yes | `required` | - |
| `exchange` | `str` | Yes | `required` | - |
| `pair` | `str` | Yes | `required` | - |
| `candle_interval` | `str` | Yes | `required` | - |
| `since` | `str` | Yes | `required` | - |
| `until` | `str` | Yes | `required` | - |
| `market_data_type` | `str` | Yes | `required` | - |
| `status` | `str` | Yes | `required` | - |
| `created_at` | `datetime` | Yes | `required` | - |
| `rows_count_theoretical` | `Optional[int]` | No | `None` | - |
| `is_consistent` | `Optional[bool]` | No | `None` | - |

## Strategies

### `StrategyConfig`

Configuration model for strategy insertion.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `raw_code` | `str` | Yes | `required` | The raw code of the strategy |

### `StrategyCodeModel`

Model for the strategy code.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `code` | `str` | Yes | `-` | - |

### `StrategiesModel`

Model for the strategies table.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `str` | Yes | `required` | - |
| `name` | `str` | Yes | `required` | - |
| `version` | `str` | Yes | `required` | - |
| `description` | `Optional[str]` | Yes | `required` | - |
| `created_at` | `datetime` | Yes | `required` | - |
| `parameters` | `str` | Yes | `required` | - |
| `default_experiment_config` | `str` | Yes | `required` | - |

## Trials

### `TrialPerformanceModel`

Model for the trial performance.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `timestamp` | `int` | Yes | `-` | - |
| `roi` | `float` | Yes | `-` | - |
| `net_profit` | `float` | Yes | `-` | - |
| `portfolio_value` | `float` | Yes | `-` | - |

### `TrialOperationsModel`

Model for the trial operations.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `timestamp` | `int` | Yes | `-` | - |
| `total_filled_orders` | `int` | Yes | `-` | - |
| `total_completed_transfers` | `int` | Yes | `-` | - |
| `total_fees_paid` | `float` | Yes | `-` | - |
| `total_risk_management_pnl_guardrail_orders` | `int` | Yes | `-` | - |
| `total_risk_management_exposure_guardrail_orders` | `int` | Yes | `-` | - |
| `total_rebalancing_transfers` | `int` | Yes | `-` | - |

### `TrialLogsModel`

Model for the trial logs.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `logs` | `str` | Yes | `-` | - |

### `TrialTracebackModel`

Model for the trial traceback.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `traceback` | `str` | Yes | `-` | - |

### `TrialsModel`

Model for the trials table.

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `str` | Yes | `required` | - |
| `experiment_id` | `str` | Yes | `required` | - |
| `status` | `str` | Yes | `required` | - |
| `created_at` | `datetime` | Yes | `required` | - |
| `completed_at` | `Optional[datetime]` | No | `None` | - |
