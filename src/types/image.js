// @flow
export type Image = {
	albumId: number,
	id: number,
	title: string,
	url: string,
	thumbnailUrl: string,
	['from' | 'to']: number
}
