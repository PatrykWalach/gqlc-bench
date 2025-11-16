/**/
import { Event } from "../../Event"

export function consoleReporter(event: Event) {
	if (event.subject === "suite" && event.type === "start") {
		console.log(`Starting Benchmark Suite`)
		console.log()
	} else if (event.subject === "benchmark" && event.type === "start") {
		console.log(`Benchmark: ${event.benchmark.title}`)
	} else if (event.subject === "client_benchmark" && event.type === "end") {
		console.log(`  ${event.client.name}:`, event.stats, event.failure)
	} else if (event.subject === "benchmark" && event.type === "end") {
		console.log()
	} else if (event.subject === "suite" && event.type === "end") {
		console.log(`Benchmark Suite Complete`)
	}
}
/**/
