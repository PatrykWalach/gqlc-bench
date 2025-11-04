import {
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	writeFileSync,
} from "fs"
import {
	Kind,
	parse,
	print,
	visit,
	type FieldNode,
	type FragmentDefinitionNode,
	type OperationDefinitionNode,
} from "graphql"
import { generatePartialExamplesFromQuery } from "../partial"

// Find dirs in examples folder
const exampleDirs = readdirSync("./examples", { withFileTypes: true }).filter(
	(dirent) => dirent.isDirectory()
)

function field(document: string, path: string) {
	let out: string[] = []
	for (const operation of parse(document).definitions) {
		if (
			operation.kind !== "OperationDefinition"
			&& operation.kind !== "FragmentDefinition"
		)
			throw new Error(
				"Operation kind is not OperationDefinition/FragmentDefinition"
			)

		const rootType = getRootType(operation)
		const fieldName = operation.name.value

		out.push(
			`export const ${fieldName} = iso(\`field ${rootType}.${fieldName} ${print(
				visit(operation.selectionSet, {
					FragmentSpread(node): FieldNode {
						return { kind: Kind.FIELD, name: node.name }
					},
					EnumValue(node) {
						return null
					},
				})
			)}\`)(({ data }) => data)`
		)
		out.push(
			`export * from '${path}__isograph/${rootType}/${fieldName}/resolver_reader'`
		)

		if (operation.kind === "OperationDefinition") {
			out.push(`iso(\`entrypoint ${rootType}.${fieldName}\`)`)
			out.push(
				`export * from '${path}__isograph/${rootType}/${fieldName}/entrypoint'`
			)
		}
	}

	return out.join(";\n")
}

function getRootType(
	operation: OperationDefinitionNode | FragmentDefinitionNode
) {
	return operation.kind === "FragmentDefinition"
		? operation.typeCondition.name.value
		: operation.operation === "query"
			? "Query"
			: "Mutation"
}

exampleDirs.forEach((exampleDir) => {
	// read query
	const query = readFileSync(
		`./examples/${exampleDir.name}/operation.gql`,
		"utf8"
	)
	// construct raw relay artifact and write it to the folder for compilation
	const relayRaw = `import graphql from 'babel-plugin-relay/macro';\ngraphql\`\n${query}\n\``
	writeFileSync(`./examples/${exampleDir.name}/operation.gql.ts`, relayRaw)

	const isographRaw = `import iso from '@iso';\n${field(query, "./")};`
	writeFileSync(
		`./examples/${exampleDir.name}/isographArtifact.graphql.ts`,
		isographRaw
	)

	// read fragment if exists
	if (existsSync(`./examples/${exampleDir.name}/fragment.gql`)) {
		const fragment = readFileSync(
			`./examples/${exampleDir.name}/fragment.gql`,
			"utf8"
		)
		const fragmentOwner = readFileSync(
			`./examples/${exampleDir.name}/fragmentOwner.gql`,
			"utf8"
		)
		// construct raw relay artifact from the fragment and write it to the folder for compilation
		const relayRawFragment = `import graphql from 'babel-plugin-relay/macro';\ngraphql\`\n${fragment}\n\`\ngraphql\`\n${fragmentOwner}\n\``
		writeFileSync(
			`./examples/${exampleDir.name}/fragment.gql.ts`,
			relayRawFragment
		)

		const isographRawFragment = `import iso from '@iso';\n${field(fragment, "./")};`
		writeFileSync(
			`./examples/${exampleDir.name}/fragment_isographArtifact.graphql.ts`,
			isographRawFragment
		)
		const isographRawFragmentOwner = `import iso from '@iso';\n${field(fragmentOwner, "./")};`
		writeFileSync(
			`./examples/${exampleDir.name}/fragmentOwner_isographArtifact.graphql.ts`,
			isographRawFragmentOwner
		)
	}

	// generate partial queries from the main query
	const partials = generatePartialExamplesFromQuery(query)

	// check if __partials__ dir exists, if not, create one
	if (!existsSync(`./examples/${exampleDir.name}/__partials__`))
		mkdirSync(`./examples/${exampleDir.name}/__partials__`)

	// check if __partials__/relay dir exists, if not, create one
	if (!existsSync(`./examples/${exampleDir.name}/__partials__/relay`))
		mkdirSync(`./examples/${exampleDir.name}/__partials__/relay`)

	// check if __partials__/isograph dir exists, if not, create one
	if (!existsSync(`./examples/${exampleDir.name}/__partials__/isograph`))
		mkdirSync(`./examples/${exampleDir.name}/__partials__/isograph`)

	// check if __partials__/other dir exists, if not, create one
	if (!existsSync(`./examples/${exampleDir.name}/__partials__/other`))
		mkdirSync(`./examples/${exampleDir.name}/__partials__/other`)

	// loop through generated partials and save each into a gql and gql.ts (for relay) files
	for (let i = 0; i < partials.length; i++) {
		const partial = partials[i]

		const relayTemplate = `import graphql from 'babel-plugin-relay/macro';\ngraphql\`\n${partial}\n\``

		const isographTemplate = `import iso from '@iso';\n${field(partial, "../../")};`

		writeFileSync(
			`./examples/${exampleDir.name}/__partials__/isograph/partial${partials.length - i < 10 ? "0" + String(partials.length - i) : partials.length - i}.gql.ts`,
			isographTemplate
		)
		writeFileSync(
			`./examples/${exampleDir.name}/__partials__/relay/partial${partials.length - i < 10 ? "0" + String(partials.length - i) : partials.length - i}.gql.ts`,
			relayTemplate
		)
		writeFileSync(
			`./examples/${exampleDir.name}/__partials__/other/partial${partials.length - i < 10 ? "0" + String(partials.length - i) : partials.length - i}.gql`,
			partial
		)
	}
})
