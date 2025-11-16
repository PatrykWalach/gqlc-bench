import { BenchmarkMetadata } from "./Benchmark"
import { ClientMetadata } from "./Client"
import { RawExample } from "./Example"

export namespace Event {
	export type Subject =
		| "suite"
		| "benchmark"
		| "client_benchmark"
		| "client_benchmark_phase"

	export type Type = "start" | "end"
	// Specific to client benchmarks.
	export type Phase = "verify" | "warmup" | "iteration"

	// Values common to all suite events.
	export interface SuiteValues {
		example: RawExample
		clients: ClientMetadata[]
		benchmarks: BenchmarkMetadata[]
		canceled: boolean
	}

	// Values common to all benchmark events.
	export interface BenchmarkValues extends SuiteValues {
		benchmark: BenchmarkMetadata
	}

	// Values common to all client benchmark events.
	export interface ClientBenchmarkValues extends BenchmarkValues {
		client: ClientMetadata
	}

	export interface ClientBenchmarkStats {
		iterations: number
		min: number
		mean: number
		max: number
		marginOfError: number
		percentRelativeMarginOfError: number
		memoryUsage?: any
	}

	export interface Failure {
		error: Error
		phase: Phase
	}

	// The Events

	export interface SuiteStart extends SuiteValues {
		subject: "suite"
		type: "start"
	}

	export interface BenchmarkStart extends BenchmarkValues {
		subject: "benchmark"
		type: "start"
	}

	export interface ClientBenchmarkStart extends ClientBenchmarkValues {
		subject: "client_benchmark"
		type: "start"
	}

	export interface ClientBenchmarkPhaseVerifyStart
		extends ClientBenchmarkValues {
		subject: "client_benchmark_phase"
		phase: "verify"
		type: "start"
	}

	export interface ClientBenchmarkPhaseVerifyEnd extends ClientBenchmarkValues {
		subject: "client_benchmark_phase"
		phase: "verify"
		type: "end"
		duration: number
		failure: Failure | undefined
	}

	export interface ClientBenchmarkPhaseWarmupStart
		extends ClientBenchmarkValues {
		subject: "client_benchmark_phase"
		phase: "warmup"
		type: "start"
	}

	export interface ClientBenchmarkPhaseWarmupEnd extends ClientBenchmarkValues {
		subject: "client_benchmark_phase"
		phase: "warmup"
		type: "end"
		duration: number
		failure: Failure | undefined
	}

	export interface ClientBenchmarkPhaseIterationStart
		extends ClientBenchmarkValues {
		subject: "client_benchmark_phase"
		phase: "iteration"
		type: "start"
	}

	export interface ClientBenchmarkPhaseIterationEnd
		extends ClientBenchmarkValues {
		subject: "client_benchmark_phase"
		phase: "iteration"
		type: "end"
		duration: number
		stats: ClientBenchmarkStats
		failure: Failure | undefined
	}

	export interface ClientBenchmarkEnd extends ClientBenchmarkValues {
		subject: "client_benchmark"
		type: "end"
		stats: ClientBenchmarkStats
		failure: Failure | undefined
	}

	export interface BenchmarkEnd extends BenchmarkValues {
		subject: "benchmark"
		type: "end"
	}

	export interface SuiteEnd extends SuiteValues {
		subject: "suite"
		type: "end"
	}
}

export type ClientBenchmarkPhaseEvent =
	| Event.ClientBenchmarkPhaseWarmupStart
	| Event.ClientBenchmarkPhaseWarmupEnd
	| Event.ClientBenchmarkPhaseVerifyStart
	| Event.ClientBenchmarkPhaseVerifyEnd
	| Event.ClientBenchmarkPhaseIterationStart
	| Event.ClientBenchmarkPhaseIterationEnd

export type Event =
	| Event.SuiteStart
	| Event.BenchmarkStart
	| Event.ClientBenchmarkStart
	| ClientBenchmarkPhaseEvent
	| Event.ClientBenchmarkEnd
	| Event.BenchmarkEnd
	| Event.SuiteEnd
