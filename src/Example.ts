export interface SingleExample {
	response: object
}

// Each client implementation extends this with the additional properties it
// requires to execute operations.
export interface Example extends SingleExample {
	title: string
	partials: SingleExample[]
	fragment?: RawFragment
}

export interface SingleRawExample {
	operation: string
	variables?: object
	response: object
	fragment?: RawFragment
}

export interface RawFragment {
	operation: string
	fragmentPath?: string
}

export interface Fragment {
	typename: string
	id: string
	response: FragmentResponse
}

export interface FragmentResponse {
	[key: string]: any
	id: string
}

export interface RawExample extends SingleRawExample {
	title: string
	schema: string
	partials: SingleRawExample[]
	rawPartials?: RawPartial[]
}

export interface RawPartial {
	operation: string
}
