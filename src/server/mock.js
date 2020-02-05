import faker from 'faker'
export const generateRows = count => ([...Array(count).keys()].map(() => ({
	title: faker.lorem.sentence(),
	text: faker.lorem.paragraph(),
	picture: `https://placeimg.com/256/192/tech?r=${Math.random()}`,
})))
