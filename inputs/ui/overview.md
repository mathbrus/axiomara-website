# 1. Introduction

Axiomara provides a user interface for users who need to review strategy candidates, launch experiments, monitor trial outcomes, analyze market datasets, and run LLM-assisted strategy generation sessions.

## 2. Screen-by-screen guide

### 2.1 Dashboard (experiments and trials)

**Purpose**  
Track experiment execution, inspect trial-level outcomes, and trigger reruns or agent-assisted follow-up work.

**When to use**  
Use this screen when you need to quickly assess experiment status and identify which trial to investigate next.

**Main actions**

- Filter experiments by status (`All`, `Successful`, `Running`, `Failed`).
- Refresh the experiment list.
- Expand an experiment row to reveal its trial table.
- Rerun an experiment from the row action.
- Open an agent run scenario from a trial row.

**Inputs and validation**

- Status filter accepts only predefined values (`all`, `success`, `running`, `failed`).
- Trial performance columns may show `Loading...` or `N/A` while metrics are still being fetched.

**Expected results**

- Expanded experiment rows reveal trial-level status, iterations, ROI, and net profit.
- Rerun action opens the launch configuration experience for a new execution cycle.

This screenshot shows the dashboard with one expanded experiment and its nested trial table:

![Dashboard experiments and trials view](../../specs/ui_docs/images/dashboard_0.png)

### 2.2 Trial Details

**Purpose**  
Investigate an individual trial through metric charts, execution logs, and stack traces when failures occur.

**When to use**  
Use this screen after identifying a trial that needs performance review or debugging.

**Main actions**

- Switch between `Metrics`, `Logs`, and `Stack Trace` tabs.
- Choose metric series in the `Select Metric` control (performance and operations metrics).
- Read full log output with severity highlighting.
- Review traceback details for failed trials.

**Inputs and validation**

- Metrics are shown only when trial status is `success`; otherwise the UI shows a guidance message.
- `Stack Trace` is disabled for successful trials.
- Empty states are explicit (`No logs available`, `No metrics data available`, `No stack trace available`).

**Expected results**

- Successful trials show a chartable time series for selected metrics.
- Logs tab presents line-by-line output with warnings/errors emphasized.
- Failed trials show traceback details when captured.

This screenshot highlights the metrics view and metric selector for a successful trial:

![Trial details metrics tab](../../specs/ui_docs/images/dashboard_1.png)

This screenshot highlights log analysis with warning lines visible in the run output:

![Trial details logs tab](../../specs/ui_docs/images/dashboard_2.png)

This screenshot highlights traceback output for a failed trial:

![Trial details stack trace tab](../../specs/ui_docs/images/dashboard_3.png)

### 2.3 Strategies

**Purpose**  
Browse available strategy versions and start experiment creation from a selected strategy.

**When to use**  
Use this screen when selecting a strategy baseline for backtesting or review.

**Main actions**

- Refresh strategies list.
- Open a strategy detail record by selecting a row.
- Start experiment creation from the `Create Experiment` action.

**Inputs and validation**

- No freeform input on the list itself; behavior is selection- and action-driven.
- Empty/error states are explicit (`No strategies found`, `Error loading strategies`).

**Expected results**

- You get a sortable-like tabular summary (name, version, description, created time).
- A selected strategy can be used as the source for a prefilled launch configuration.

This screenshot shows strategy entries and the `Create Experiment` action per row:

![Strategies list with create experiment actions](../../specs/ui_docs/images/strategy_0.png)

### 2.4 Launch experiment

**Purpose**  
Create a new experiment from JSON configuration, including trial count and strategy parameters.

**When to use**  
Use this screen when you want to run a new experiment based on an existing experiment template or a strategy default configuration.

**Main actions**

- Edit the JSON configuration directly.
- Use `Add trial` to increment `number_of_trials` and duplicate the last value of each strategy parameter array.
- Launch the experiment submission.

**Inputs and validation**

- JSON must be valid and parse to an object.
- Invalid JSON blocks submission and shows an error (`Invalid JSON` or `Invalid JSON – fix config before adding a trial`).
- During submit, the action state changes to `Launching...`.

**Expected results**

- Successful launch returns to the monitoring context with a newly created experiment.
- Errors are shown inline without losing current edited config text.

This screenshot shows the editable JSON panel, `Add trial`, and launch action:

![Launch experiment with editable JSON config](../../specs/ui_docs/images/strategy_1.png)

### 2.5 Market Data

**Purpose**  
Analyze one or more market data objects as comparative time series and inspect dataset metadata quality.

**When to use**  
Use this screen when validating dataset coverage, consistency, and price behavior before strategy or experiment decisions.

**Main actions**

- Select and deselect market data rows to control chart series.
- Clear all selected datasets.
- Refresh market data.
- Start market data object creation.

**Inputs and validation**

- Chart fetching is enabled for selected datasets with `success` status.
- Failed datasets surface dataset-specific error messages.
- Empty states are explicit (`Select items below to display the chart`, `No data available for selected market data objects`).

**Expected results**

- A responsive multi-series line chart appears for selected datasets.
- Legend labels reflect exchange, pair, and candle interval for each selected dataset.
- Selection count and row highlight state stay synchronized with chart contents.

This screenshot shows one selected dataset driving the chart while all available objects remain visible below:

![Market data analysis with selected dataset](../../specs/ui_docs/images/market_data.png)

### 2.6 Agent Sessions

**Purpose**  
Review agent sessions, rerun sessions, and accept generated code as a strategy candidate.

**When to use**  
Use this screen when managing the lifecycle of LLM-assisted strategy generation sessions.

**Main actions**

- Refresh sessions list.
- Rerun a selected session.
- Accept generated strategy code from a session.
- Expand completed sessions to inspect metadata and run history.

**Inputs and validation**

- Running sessions are not expandable; the UI displays a warning to wait for completion.
- Accept action can return success or error feedback inline.

**Expected results**

- Session rows show status, run count, timestamps, and optional trial linkage.
- Completed sessions reveal aggregated metrics and a runs table on expansion.

This screenshot shows the sessions table with rerun and accept actions:

![Agent sessions list with rerun and accept actions](../../specs/ui_docs/images/agent_1.png)

### 2.7 New Strategy (agent run form)

**Purpose**  
Start an agent run for a new strategy scenario with explicit LLM and instruction configuration.

**When to use**  
Use this screen when initiating a first strategy-generation run or when preparing instruction-driven strategy ideation.

**Main actions**

- Choose model (`gpt-5-nano` or `mock-model`).
- Set temperature.
- Enter investment committee instructions and/or user instructions.
- Submit with `Run Agent`.

**Inputs and validation**

- Model is required.
- Temperature must be numeric and between `0` and `2`.
- Scenario-specific instruction rules apply:
  - For a first `new_strategy` run, at least one instruction field must be provided.
  - For `existing_strategy` or existing session runs, user instructions are required.
- Validation failures are shown as a checklist before submission.

**Expected results**

- A valid submission triggers run creation and returns to the sessions context.
- Form-level validation prevents malformed requests.

This screenshot shows the new strategy run form with required LLM configuration and instruction fields:

![Agent new strategy run form](../../specs/ui_docs/images/agent_0.png)

## 3. Core user workflows

### 3.1 Launch an experiment from a strategy and review outcomes

1. Pick a strategy in **Strategies** and start experiment creation.
2. In **Launch experiment**, review JSON, optionally use **Add trial**, then launch.
3. In **Dashboard**, inspect experiment/trial statuses and expand the experiment row.
4. Open the trial and review metrics, then logs and stack trace if needed.

The strategy list and launch configuration screens work together to move from idea to execution:

![Strategies list](../../specs/ui_docs/images/strategy_0.png)

![Launch experiment flow](../../specs/ui_docs/images/strategy_1.png)

### 3.2 Diagnose trial behavior

1. Identify a target trial from experiment results.
2. Use **Metrics** to evaluate trend behavior across selectable KPIs.
3. Use **Logs** for chronological execution details and warnings.
4. Use **Stack Trace** for failed runs to isolate exception context.

These trial details views support both performance analysis and failure diagnosis:

![Trial metrics trend](../../specs/ui_docs/images/dashboard_1.png)

![Trial logs output](../../specs/ui_docs/images/dashboard_2.png)

![Trial failure traceback](../../specs/ui_docs/images/dashboard_3.png)

### 3.3 Compare market datasets before running strategy work

1. Select one or more market data objects in the table.
2. Confirm the chart updates with corresponding labeled series.
3. Clear selection to reset visual analysis when needed.

This screen combines chart-level and table-level evidence in one analysis workspace:

![Market data chart and object table](../../specs/ui_docs/images/market_data.png)

### 3.4 Run an agent-based strategy generation session

1. Open **Agent Sessions** to check current session states.
2. Start a **New Strategy** run and provide valid LLM settings plus instructions.
3. Submit the run and monitor sessions for completion.
4. Use rerun/accept actions in sessions to continue or finalize outcomes.

These two screens support start-to-finish agent session operations:

![Agent sessions overview](../../specs/ui_docs/images/agent_1.png)

![New strategy agent run form](../../specs/ui_docs/images/agent_0.png)
