import { BenchmarkConstructor } from "../src"

// Find and export all benchmarks in this directory (recursively)
const benchmarkContext = import.meta.webpackContext(".", {
	recursive: true,
	regExp: /\.ts$/,
})
const benchmarks: BenchmarkConstructor[] = benchmarkContext
	.keys()
	.filter((path) => !/(^|[\\/])index\.ts$/.test(path))
	.map((path) => benchmarkContext(path))
	.map((exports) => exports.default)

export default benchmarks
