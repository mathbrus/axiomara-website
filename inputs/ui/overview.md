# 1. Introduction

DeepAlphaResearch is a task-focused UI for quantitative research work. It helps users run experiments, inspect trial outcomes, review and compare strategy artifacts, manage market datasets, and run agent-assisted strategy iterations.

This guide is for end users (researchers, analysts, and operators). It focuses on practical usage and expected outcomes based on implemented UI behavior.

# 2. Getting started by user goals

## 2.1 Goal-to-screen quick orientation

| If your goal is... | Start with this screen |
| --- | --- |
| Monitor experiment progress and drill into trial health | Dashboard |
| Create a new experiment from an existing setup or strategy | Launch experiment |
| Review strategy code and parameter definitions | Strategy list and Strategy details |
| Compare multiple market datasets in charts | Market data workspace |
| Request a new market dataset | Create market data |
| Run AI-assisted strategy generation/improvement | Agent sessions and Agent run form |
| Audit generated strategy outputs and prompts | Agent run details |

## 2.2 First-use checklist

1. Open `Strategy` and identify a strategy you want to test.
2. Launch an experiment and review its configuration before submitting.
3. Monitor the trial in `Dashboard`, then inspect metrics and logs.
4. Open `Market Data` to compare datasets that support your analysis.
5. Use `Agent` to run an assisted iteration and review final outputs.
6. Accept generated strategy code only after checking logs and metadata.

# 3. Screen-by-screen guide

## 3.1 Dashboard

### Purpose

Track experiments and their trials in one place, including current status and high-level outcomes.

### When to use

- You want to monitor active work and recent results.
- You need to inspect trial-level outcomes from an experiment.
- You want to start a rerun or open an agent iteration from trial context.

### Main actions

- Filter experiments by status (`All`, `Successful`, `Running`, `Failed`).
- Refresh the experiments table.
- Expand an experiment row to reveal nested trial rows.
- Open trial details.
- Start rerun from an experiment row.
- Start agent run from a trial row.

### Inputs and validation

- Status filter is a controlled selection input.
- Trial-level ROI and Net Profit are loaded asynchronously for each trial row.

### Expected results

- Experiment rows show status badges, timestamps, execution time, and trial count.
- Expanded experiment rows show trial details and trial-level actions.
- Loading, empty, and error states are shown inline.

### Screenshot(s)

This screenshot shows one expanded experiment with nested trials, plus row-level actions for rerun and agent launch.

![Dashboard experiments and trials](../../specs/ui_docs/images/dashboard.png)

## 3.2 Launch experiment

### Purpose

Create a new experiment from an existing configuration context and submit it for execution.

### When to use

- You are re-running an experiment with adjustments.
- You are creating an experiment from a selected strategy configuration.

### Main actions

- Edit experiment configuration in an editable terminal-style JSON panel.
- Use `Add trial` to increase trial count and duplicate the latest strategy parameter entries.
- Submit with `Launch experiment`.

### Inputs and validation

- Configuration must be valid JSON.
- Parsed configuration must be an object.
- Invalid JSON or invalid shape blocks submission and shows a clear inline error.

### Expected results

- Successful submission creates the experiment and returns you to the experiment monitoring area.
- Failed submission keeps the form visible with an error message.

### Screenshot(s)

This view highlights the editable configuration panel and the `Add trial` helper used before submission.

![Launch experiment configuration editor](../../specs/ui_docs/images/experiment_creation.png)

## 3.3 Trial details

### Purpose

Inspect one trial deeply through metrics, logs, and traceback output.

### When to use

- You need to validate trial performance trends.
- You need to diagnose warnings, failures, or unexpected behavior.

### Main actions

- Switch between `Metrics`, `Logs`, and `Stack Trace` tabs.
- Select specific metric series (performance and operations metrics).
- Review terminal-style logs with visual severity highlights.
- Inspect traceback details when available.

### Inputs and validation

- `Stack Trace` is disabled for successful trials.
- Metrics view for non-success trials shows a guidance message instead of metric charts.

### Expected results

- Metrics tab: time-series chart for selected metric when data exists.
- Logs tab: line-by-line log output with severity-aware styling.
- Stack Trace tab: traceback output, no-data message, or error state depending on trial data.

### Screenshot(s)

This screenshot shows the metrics tab with metric selector and chart output for a successful trial.

![Trial details metrics view](../../specs/ui_docs/images/trial_metrics.png)

This screenshot shows the logs tab with terminal-style output and warning highlights.

![Trial details logs view](../../specs/ui_docs/images/trial_logs.png)

## 3.4 Strategy list

### Purpose

Browse available strategy versions and start deeper review or experiment creation.

### When to use

- You want to find a strategy by name/version.
- You want to create an experiment from a strategy baseline.

### Main actions

- Refresh strategy data.
- Open strategy details from a row click.
- Use `Create Experiment` on a strategy row.

### Inputs and validation

- No user form inputs on this screen.

### Expected results

- A table of strategies with name, version, description, and creation time.
- Inline loading, empty, and error states when applicable.

### Screenshot(s)

This image shows strategy rows and the `Create Experiment` action for each strategy.

![Strategy list and actions](../../specs/ui_docs/images/strategy_list.png)

## 3.5 Strategy details

### Purpose

Review the implementation and parameter definitions of one strategy version.

### When to use

- You need to inspect strategy code before using it.
- You need to verify parameter defaults or descriptions.

### Main actions

- Switch between `Code` and `Parameters` tabs.
- Copy source code from terminal-style output.
- Review normalized parameter table when available.

### Inputs and validation

- No direct form input.
- If parameter JSON is missing or invalid, the screen shows `No parameters defined for this strategy.`

### Expected results

- Code is displayed with loading/error handling.
- Parameter metadata appears in a dynamic table with relevant columns only.

### Screenshot(s)

no screenshot available yet

## 3.6 Market data workspace

### Purpose

Compare selected market datasets visually and inspect dataset metadata quality/status.

### When to use

- You want to contrast one or more datasets over time.
- You need to check dataset processing status and consistency signals.

### Main actions

- Select and deselect table rows to control chart series.
- Use `Clear all` to reset chart selections.
- Refresh market data list.
- Open market data creation flow.

### Inputs and validation

- Row selection supports multi-select toggling.
- Chart fetches series data only for selected datasets with a successful status.

### Expected results

- Empty state prompt when no dataset is selected.
- Single- or multi-series chart when selected data is available.
- Per-dataset loading, error, and no-data indicators in legend and notices.

### Screenshot(s)

This screenshot shows the default empty chart state before any dataset selection.

![Market data workspace empty chart state](../../specs/ui_docs/images/market_data_list.png)

This screenshot shows one selected dataset plotted in the analysis chart with legend and selection marker.

![Market data workspace with plotted dataset](../../specs/ui_docs/images/market_data_plot.png)

## 3.7 Create market data

### Purpose

Submit a market data creation request with exchange, pair, period, and candle interval.

### When to use

- You need a fresh dataset for analysis or experimentation.

### Main actions

- Fill:
  - `Exchange`
  - `Pair`
  - `Start Time (Since)`
  - `End Time (Until)`
  - `Candle Interval`
- Submit with `Create Market Data`.

### Inputs and validation

- All fields are required.
- Start and end values must be valid datetimes.
- End must be after start.
- Start cannot be more than 10 years in the past.
- End cannot be more than 1 year in the future.

### Expected results

- Success message appears, then auto-return to the market data workspace after a short delay.
- Validation and backend errors are shown inline.

### Screenshot(s)

no screenshot available yet

## 3.8 Agent sessions

### Purpose

Review session history for agent-assisted iterations and operate on completed session outputs.

### When to use

- You want to monitor current session states.
- You want to rerun a prior session.
- You want to accept generated code from a completed session.

### Main actions

- Refresh sessions list.
- Expand non-running sessions to reveal aggregate metadata and per-run list.
- Trigger rerun for a session.
- Accept generated code for a session.

### Inputs and validation

- Running sessions cannot be expanded; a warning is shown instead.
- Accept operation surfaces success or error feedback inline and clears automatically.

### Expected results

- Session table with status, run count, timestamps, and related trial link (if present).
- Expanded metadata panel with token totals, durations, calls, and validation attempts.

### Screenshot(s)

This screenshot shows the sessions table in a running-state scenario with rerun and accept actions visible.

![Agent sessions overview](../../specs/ui_docs/images/agent_runs_list.png)

## 3.9 Agent run form

### Purpose

Configure and start a new agent run for strategy generation or iterative improvement.

### When to use

- You want to initiate a new AI-assisted strategy session.
- You want to add another run to an existing strategy-improvement session.

### Main actions

- Choose model and temperature.
- Provide instruction inputs (investment committee and/or user instructions, depending on context).
- Start execution with `Run Agent`.

### Inputs and validation

- `Model` is required.
- `Temperature` must be numeric and in `[0, 2]`.
- Existing session context requires user instructions.
- Existing strategy context requires user instructions.
- First new-strategy run requires at least one instruction field.

### Expected results

- Run request is submitted.
- UI immediately returns to session monitoring while processing continues in the background.

### Screenshot(s)

This image shows the new-strategy run form with configuration controls and instruction fields prior to submission.

![Agent run form for new strategy generation](../../specs/ui_docs/images/agent_run_strategy_creation.png)

## 3.10 Agent run details

### Purpose

Audit one completed run output, including final strategy code, run-scoped logs, and full prompt metadata.

### When to use

- You need to validate generated strategy content.
- You need to trace run behavior and prompt history before accepting outcomes.

### Main actions

- Switch between `Final Strategy`, `Logs`, and `Metadata & Prompts`.
- Copy large text/code blocks from terminal-style tabs.

### Inputs and validation

- No user form input on this screen.
- Incomplete runs are not opened from the run list.

### Expected results

- Final strategy tab displays latest generated code artifact.
- Logs tab shows run-specific extracted logs.
- Metadata tab shows aggregate metrics and prompt/call details.

### Screenshot(s)

no screenshot available yet

# 4. Core user workflows

## 4.1 Run an experiment and assess results

1. Choose a strategy from `Strategy list`.
2. Open `Launch experiment` and review config.
3. Submit the experiment.
4. Monitor status in `Dashboard`.
5. Open `Trial details` to inspect metrics and logs.

## 4.2 Compare market datasets for analysis

1. Open `Market data workspace`.
2. Select one or more datasets from the table.
3. Compare trend lines in the chart.
4. Check legend/status indicators for loading, errors, or no-data cases.
5. Clear selections when done.

## 4.3 Create a new market dataset

1. Open `Create market data`.
2. Fill required exchange/pair/time/interval fields.
3. Submit request.
4. Confirm success feedback and automatic return.

## 4.4 Perform agent-assisted strategy iteration

1. Open `Agent sessions`.
2. Start a run from `Agent run form`.
3. Provide valid model/temperature and required instructions.
4. Monitor session status until completion.
5. Open `Agent run details` and review strategy, logs, and metadata.
6. Accept generated code only after review.
