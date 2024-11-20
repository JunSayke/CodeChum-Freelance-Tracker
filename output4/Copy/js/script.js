document.addEventListener("DOMContentLoaded", function () {
	// Get all parallax elements
	const parallaxContainer = document.querySelector(
		"#first-section.parallax-container"
	)
	const snowBallsPattern = parallaxContainer.querySelector(
		".snow-pattern.snow-balls"
	)
	const snowFlakesPattern = parallaxContainer.querySelector(
		".snow-pattern.snow-flakes"
	)
	const treesPattern = parallaxContainer.querySelector(".trees-pattern")
	const reindeerLeftPattern = parallaxContainer.querySelector(
		".reindeer-pattern.reindeer-left"
	)
	const reindeerRightPattern = parallaxContainer.querySelector(
		".reindeer-pattern.reindeer-right"
	)

	/*
	 * Parallax speed rate
	 * The higher the number, the slower the element will move
	 * The lower the number, the faster the element will move
	 * All uses pixels as unit except for reindeer which uses percentage
	 */
	const parallaxSpeed = {
		snowBalls: 2,
		snowFlakes: 3,
		trees: 5,
		reindeer: 0.1,
	}

	/*
	 * Update parallax elements positions based on scroll position
	 */
	function updateParallax() {
		// Get scroll position
		const scrollPosition = window.scrollY
		// Use window height and width to normalize the position (avoid getting large position values)
		const windowHeight = window.innerHeight
		const windowWidth = window.innerWidth

		// Calculate new positions
		const snowBallsY = (scrollPosition * parallaxSpeed.snowBalls) % windowHeight
		const snowFlakesY =
			(scrollPosition * parallaxSpeed.snowFlakes) % windowHeight
		const treesX = (scrollPosition * parallaxSpeed.trees) % windowWidth
		const reindeerLeftX =
			(15 + scrollPosition * -parallaxSpeed.reindeer) % windowWidth
		const reindeerRightX =
			(85 + scrollPosition * parallaxSpeed.reindeer) % windowWidth
		const reindeerY =
			(50 - scrollPosition * parallaxSpeed.reindeer) % windowHeight

		// Set new positions
		snowBallsPattern.style.backgroundPosition = `center ${snowBallsY}px`
		snowFlakesPattern.style.backgroundPosition = `center ${snowFlakesY}px`
		treesPattern.style.backgroundPosition = `${treesX}px bottom`
		reindeerLeftPattern.style.backgroundPosition = `${reindeerLeftX}% ${reindeerY}%`
		reindeerRightPattern.style.backgroundPosition = `${reindeerRightX}% ${reindeerY}%`
	}

	// Attach scroll event listener
	window.addEventListener("scroll", updateParallax)
	updateParallax() // Initial call to set positions on load
})
