export const intents = {
	'add to reading list': `
		the email contains a long-form essay or blog post
		type content and does not appear to be marketing
	`,
	'add to awaiting-delivery list': `
		the email notes that a physical item was purchased
		that will be shipped and delivered
	`,
	'mark as delivered on awaiting-delivery list': `
		the email notes that a physical item was delivered
		to an address or other physical location
	`,
}
