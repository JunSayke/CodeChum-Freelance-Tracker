document.addEventListener("scroll", function () {
	const scrollPosition = window.scrollY
	const snowPattern = document.querySelector(".snow-pattern")
	const snowPattern2 = document.querySelector(".snow-pattern2")
	const treesPattern = document.querySelector(".trees-pattern")

	snowPattern.style.backgroundPositionY = `${scrollPosition * 0.2}px`
	snowPattern2.style.backgroundPositionY = `${scrollPosition * 0.3}px`
	treesPattern.style.backgroundPositionX = `${scrollPosition * 0.4}px`
})
