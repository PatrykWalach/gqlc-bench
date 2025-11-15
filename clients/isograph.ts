import packageInfo from "@isograph/react/package.json"

import type {
	EagerReaderArtifact,
	FragmentReference,
	IsographEntrypoint,
	IsographEnvironment,
	NormalizationAst,
	ReaderAst,
	RetainedQuery,
	UnknownTReadFromStore,
	WithEncounteredRecords,
} from "@isograph/react"
import {
	createIsographEnvironment,
	createIsographStore,
	normalizeData,
	readButDoNotEvaluate,
	subscribe,
	wrapResolvedValue,
} from "@isograph/react"

import { getNetworkRequestOptionsWithDefaults } from "@isograph/react/dist/core/read"
import { ROOT_ID } from "relay-runtime"
import {
	Client,
	Fragment,
	Observer,
	RawExample,
	RawFragment,
	ReadResult,
	SingleExample,
} from "../src"

declare module "../src/Example" {
	export interface SingleRawExample {
		isographArtifact?: IsographEntrypoint<any, any, NormalizationAst>
	}
	export interface RawFragment {
		isographArtifact?: EagerReaderArtifact<any, any>
		ownerIsographArtifact?: IsographEntrypoint<any, any, NormalizationAst>
	}

	export interface RawPartial {
		isographArtifact: IsographEntrypoint<any, any, NormalizationAst>
	}
}

class IsographObserver<TReadFromStore extends UnknownTReadFromStore>
	implements Observer
{
	private readOutDataAndRecords: WithEncounteredRecords<TReadFromStore>
	private disposable: () => void

	constructor(
		environment: IsographEnvironment,
		fragmentReference: FragmentReference<any, any>,

		readerAst: ReaderAst<TReadFromStore>
	) {
		const networkRequestOptions = getNetworkRequestOptionsWithDefaults()
		this.readOutDataAndRecords = readButDoNotEvaluate(
			environment,
			fragmentReference,
			networkRequestOptions
		)
		this.disposable = subscribe(
			environment,
			this.readOutDataAndRecords,
			fragmentReference,
			(newEncounteredDataAndRecords) => {
				this.readOutDataAndRecords = newEncounteredDataAndRecords
			},
			readerAst
		)
	}

	unsubscribe() {
		return this.disposable()
	}

	mostRecentResult() {
		return { data: this.readOutDataAndRecords.item }
	}
}

interface IsographFragmentExample extends Omit<RawFragment, "operation"> {
	operation: RetainedQuery
}

interface IsographExample<TReadFromStore extends UnknownTReadFromStore>
	extends SingleExample {
	operation: RetainedQuery
	variables?: object
	isographArtifact: IsographEntrypoint<TReadFromStore, any, NormalizationAst>
	fragment?: IsographFragmentExample
}

export class Isograph<
	TReadFromStore extends UnknownTReadFromStore,
> extends Client {
	static metadata = { name: `Isograph (v${(packageInfo as any).version})` }

	private _client = createIsographEnvironment(
		createIsographStore(),
		async () => {
			throw new Error(`end-to-end queries are not supported`)
		}
	)

	transformRawExample(rawExample: RawExample): IsographExample<TReadFromStore> {
		const operation: RetainedQuery = {
			variables: rawExample.variables,
			root: {
				__link: ROOT_ID,
				__typename: rawExample.isographArtifact.concreteType,
			},
			normalizationAst:
				rawExample.isographArtifact.networkRequestInfo.normalizationAst
					.selections,
		}

		let fragment: IsographFragmentExample

		return {
			operation,
			response: rawExample.response,
			variables: rawExample.variables,
			isographArtifact: rawExample.isographArtifact,
			fragment,
		}
	}

	async read({
		operation,
	}: IsographExample<TReadFromStore>): Promise<ReadResult<object>> {
		return {
      data: null
    }
	}

	async readFragment(
		{ fragment, variables }: IsographExample<TReadFromStore>,
		fragmentInstance: Fragment
	): Promise<ReadResult<object>> {
		return {
      data: null
    }
	}

	async write({ operation, response }: IsographExample<TReadFromStore>) {
		normalizeData(
			this._client,
			operation.normalizationAst,
			// @ts-expect-error bad typings
			response,
			operation.variables,
			operation.root
		)
	}

	observe({ operation, isographArtifact }: IsographExample<TReadFromStore>) {
		const entrypoint = isographArtifact

		switch (entrypoint.readerWithRefetchQueries.kind) {
			case "ReaderWithRefetchQueriesLoader":
				throw new Error("end-to-end queries are not supported")
			case "ReaderWithRefetchQueries":
				const fragmentReference: FragmentReference<TReadFromStore, any> = {
					kind: "FragmentReference",
					readerWithRefetchQueries: wrapResolvedValue(
						entrypoint.readerWithRefetchQueries
					),
					root: operation.root,
					// @ts-expect-error bad typings
					variables: operation.variables,
					networkRequest: wrapResolvedValue(undefined),
				}

				return new IsographObserver(
					this._client,
					fragmentReference,
					entrypoint.readerWithRefetchQueries.readerArtifact.readerAst
				)
		}
	}
}
