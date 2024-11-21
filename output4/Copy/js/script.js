document.addEventListener("DOMContentLoaded", function () {
	// Parallax speed rate
	const parallaxSpeed = {
		snowBalls: 2,
		snowFlakes: 3,
		trees: 5,
		reindeer: 1,
	}

	// Update parallax elements positions based on scroll position
	function updateParallax() {
		// Get scroll position
		const scrollPosition = window.scrollY
		// Use window height and width to normalize the position (avoid getting large position values)
		const windowHeight = window.innerHeight
		const windowWidth = window.innerWidth

		// Select all elements with data-parallax attribute
		const parallaxElements = document.querySelectorAll("[data-parallax]")

		parallaxElements.forEach((element) => {
			const parallaxType = element.dataset.parallax

			let positionX, positionY
			switch (parallaxType) {
				case "snow-balls":
					positionY = (scrollPosition * parallaxSpeed.snowBalls) % windowHeight
					element.style.backgroundPosition = `center ${positionY}px`
					break
				case "snow-flakes":
					positionY = (scrollPosition * parallaxSpeed.snowFlakes) % windowHeight
					element.style.backgroundPosition = `center ${positionY}px`
					break
				case "trees":
					positionX = (scrollPosition * parallaxSpeed.trees) % windowWidth
					element.style.backgroundPosition = `${positionX}px bottom`
					break
				case "reindeer-left":
					positionX = (scrollPosition * -parallaxSpeed.reindeer) % windowWidth
					positionY = -(scrollPosition * parallaxSpeed.reindeer) % windowHeight
					element.style.transform = `translate(${positionX}px, ${positionY}px) translateY(-50%)`
					break
				case "reindeer-right":
					positionX = (scrollPosition * parallaxSpeed.reindeer) % windowWidth
					positionY = -(scrollPosition * parallaxSpeed.reindeer) % windowHeight
					element.style.transform = `translate(${positionX}px, ${positionY}px) translateY(-50%)`
					break
			}
		})
	}

	// Use requestAnimationFrame for smoother animations
	function onScroll() {
		requestAnimationFrame(updateParallax)
	}

	// Attach scroll event listener
	window.addEventListener("scroll", onScroll)
	// Initial call to set positions on load
	updateParallax()
})
