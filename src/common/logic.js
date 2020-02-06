const getHomeData = (pages, lang = 'pl') => {
	const slug = lang == 'pl' ? 'home' : 'home-en'
	const home = pages.filter((e) => e.slug == slug)[0]['acf']
	return [Object.keys(home), home]
}

export { getHomeData }
