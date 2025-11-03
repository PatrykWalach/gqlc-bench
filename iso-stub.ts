declare module "@iso" {
	export default function (literal: string): <T>(fn: T) => T
}
