const getPageData = (pages, slug="") => {
	if(slug === ""){
		return pages[0]
	}
	else{
		return pages.filter((e) => e.slug == slug)[0]
	}
}

export { getPageData }
