<template>
	<header class="header" :class="{fixed: scrollPosition > 100}">
		<div class="side-menu-overlay" @click="toggleMenu()" :class="{sideOverlay:show}"></div>
		<div class="container wd-container">
			<div class="header-wrap d-flex flex-wrap align-items-center">
				<div class="head-left">
					<div class="logo">
						<router-link to="/">
							<img svg-inline src="../../public/img/logo/logo.svg" alt="logo">
						</router-link>
					</div>
				</div>
				<div class="head-right d-flex flex-wrap align-items-center">
					<ul class="social">
						<li>
							<a href="#">
								<img svg-inline src="../../public/img/social/be.svg" alt="Behance">
							</a>
						</li>
						<li>
							<a href="#">
								<img svg-inline src="../../public/img/social/tw.svg" alt="Twitter">
							</a>
						</li>
						<li>
							<a href="#">
								<img svg-inline src="../../public/img/social/fb.svg" alt="Facebook">
							</a>
						</li>
					</ul>

					<div class="btn-dark-light">
						<a href="javascript:void(0)" @click="toggleColor()">
							<img svg-inline src="../../public/img/icons/dark-light.svg" alt="dark light">
						</a>
					</div>

					<a href="javascript:void(0)" @click="toggleMenu()"
						class="toggle toggleOpen d-flex align-items-center">
						<span class="icon"></span>
					</a>
				</div>
				<div class="head-center" :class="{show:show}">
					<div class="menu-container">
						<a href="javascript:void(0)" @click="toggleMenu()"
							class="toggle toggleClose d-flex align-items-center">
							<span class="icon"></span>
						</a>
						<ul class="menu">
							<li @click="toggleMenu()">
								<router-link to="/">Home</router-link>
							</li>
							<li @click="toggleMenu()">
								<router-link to="/about">About</router-link>
							</li>
							<!-- <li @click="toggleMenu()">
								<router-link to="/blog">Blog</router-link>
							</li> -->
							<li @click="toggleMenu()">
								<router-link to="/technology">Technology</router-link>
							</li>
							<li>
								<router-link to="/services"><span @click="toggleMenu()">Services</span></router-link>
								<div class="menu-arrow" @click="showMenu('services')"
									:class="{ open: activeTab === 'services' }">
									<img svg-inline src="../../public/img/icons/down-arrow.svg" alt="arrow">
								</div>
								<ul class="sub-menu" :class="{ showMega: activeTab === 'services' }">
									<li @click="toggleMenu()">
										<router-link to="/web-development">Web Development</router-link>
									</li>
									<li @click="toggleMenu()">
										<router-link to="">App Development</router-link>
										<div class="menu-arrow" @click="showSubMenu('app')" :class="{ open: activeSubTab === 'app' }">
											<img svg-inline src="../../public/img/icons/down-arrow.svg" alt="arrow">
										</div>
										<ul class="sub-menu" :class="{ showMega: activeSubTab === 'app' }">
											<li><a href="/android">Android</a></li>
											<li><a href="/ios">iOS</a></li>
											<li><a href="/flutter">Flutter</a></li>
										</ul>
									</li>
									<li @click="toggleMenu()">
										<router-link to="/digital-marketing">Digital Marketing</router-link>
									</li>
									<li>
										<router-link to="">E commerce</router-link>
										<div class="menu-arrow" @click="showSubMenu('commerce')" :class="{ open: activeSubTab === 'commerce' }">
											<img svg-inline src="../../public/img/icons/down-arrow.svg" alt="arrow">
										</div>
										<ul class="sub-menu" :class="{ showMega: activeSubTab === 'commerce' }">
											<li><a href="/magento">Magento</a></li>
											<li><a href="/wordpress">Wordpress</a></li>
											<!-- <li><a href="/custom-php">Custom php</a></li> -->
										</ul>
									</li>
								</ul>
							</li>
							<!-- <li @click="toggleMenu()">
								<router-link to="/our-work">Our Work</router-link>
							</li> -->
							<li>
								<router-link to="/contact-us">Contact Us</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	</header>
</template>
<script>
	export default {
		name: 'Header',
		data() {

			return {
				show: false,
				scrollPosition: null,
				activeTab: '',
				activeSubTab: ''
			}
		},
		mounted() {
			window.addEventListener('scroll', this.updateScroll);
		},
		methods: {
			toggleColor() {
				var app = document.getElementsByTagName("BODY")[0];
				if (localStorage.lightMode == "dark") {
					localStorage.lightMode = "light";
					app.setAttribute("data-light-mode", "light");
				} else {
					localStorage.lightMode = "dark";
					app.setAttribute("data-light-mode", "dark");
				}
			},
			updateScroll() {
				this.scrollPosition = window.scrollY
			},
			toggleMenu() {
				this.show = !this.show

			},
			showMenu(value) {
				console.log('called', value)
				if (value == this.activeTab) {
					this.activeTab = ''
				} else {
					this.activeTab = value
				}

			},
			showSubMenu(value) {
				console.log('called', value)
				if (value == this.activeSubTab) {
					this.activeSubTab = ''
				} else {
					this.activeSubTab = value
				}

			}
		}
	}
</script>


<style lang="scss" scoped>
.toggle {
	width: 26px;
	height: 20px;
	position: relative;

	span {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--font-stl-two);
		border-radius: 2px;

		&:after,
		&:before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			height: 2px;
			background: var(--font-stl-two);
			border-radius: 2px;
		}

		&:after {
			top: 0px;
		}

		&:before {
			bottom: 0px;
		}
	}

	&.toggleOpen {
		margin: 15px 10px;
	}

	&.toggleClose {
		margin: 12px 12px 12px auto;

		span {
			background: none;

			&:after {
				top: auto;
				transform: rotate(45deg);
				background: var(--font-stl-one);
			}

			&:before {
				bottom: auto;
				transform: rotate(-45deg);
				background: var(--font-stl-one);
			}
		}
	}
}

.btn-dark-light {
	svg {
		width: 25px;
		fill: #fff
	}
}

.logo {
	svg {
		height: auto;
		max-width: 150px;
		width: 100%;
		fill: #fff;
	}
}

.header {
	position: absolute;
	left: 0px;
	right: 0;
	top: 0px;
	z-index: 999;
	transition: all 0.3s ease-in-out;
	&.fixed{

	}
}

ul.menu {
	position: relative;

	li {
		position: relative;
	}

	li>a {
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		display: block;
		padding: 10px 10px;
		letter-spacing: 1px;
	}

	.sub-menu>li>a {
		text-transform: capitalize;
	}
}

.fixed {
	position: fixed;
	background-color: var(--bgw-bgb-color);
	box-shadow: 0 0 transparent, 0 0 transparent, 0 5px 5px -4px rgba(0, 0, 0, 0.10);
	.toggle {
		span {
			background: var(--font-stl-three);

			&:after,
			&:before {
				background: var(--font-stl-three);
			}
		}

		&.toggleClose {
			span {
				background: none;

				&:after,
				&:before {
					background: var(--w-b-color);
				}
			}

		}
	}

	.logo {
		svg {
			fill: var(--font-stl-three);
		}
	}

	.btn-dark-light {
		svg {
			fill: var(--font-stl-three);
		}
	}

	ul.social {
		li {
			svg {
				fill: var(--font-stl-three);
			}
		}
	}
}

@media(min-width:1025px) {
	.menu-arrow {
		display: none;
	}

	.toggle {
		display: none !important;
	}

	.header {
		.head-left {
			order: 1;
		}

		.head-center {
			margin: 0 auto;
			order: 2;
		}

		.head-right {
			order: 3;
		}
	}

	.menu-container {
		padding: 10px 0px;
	}

	ul.menu {
		display: flex;

		&>li {
			padding: 0px 10px;
		}

		.sub-menu {
			position: absolute;
			top: 100%;
			padding: 10px 0px;
			min-width: 180px;
			background: rgba(19, 20, 22, 0.9);
			box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.35);
			transition: all 0.3s;
			opacity: 0;
			visibility: hidden;

			li {
				padding: 0px 25px;
				display: block;

				a {
					position: relative;
					padding: 0px 0px;
					font-weight: 400;
					overflow: hidden;
					display: inline-block;

					&:after {
						content: " ";
						position: absolute;
						left: 0;
						bottom: 0;
						width: calc(0% - 1px);
						height: 2px;
						background-color: var(--s-color);
						transition: all 0.3s;
					}

					&:hover {
						color: #fff;

						&:after {
							width: calc(100% + 1px);
						}
					}
				}

				&:hover {
					&>a {
						color: #fff;

						&:after {
							width: calc(100% + 1px);
						}
					}
				}
			}
		}

		&>li {
			&>.sub-menu {
				transform: translateY(0px);

				li {
					.sub-menu {
						right: -100%;
						top: 50%;
						transform: translate(20px, -50%);
					}
				}
			}
		}

		&>li:hover {
			&>.sub-menu {
				transform: translateY(0px);
				opacity: 1;
				visibility: visible;
			}
		}

		&>li>.sub-menu li:hover>.sub-menu {
			transform: translate(0px, -50%);
			opacity: 1;
			visibility: visible;
		}
	}

	ul.menu {
		&>li>a {
			color: #fff;
		}

		.sub-menu {
			li {
				a {
					color: rgba(240, 240, 240, 0.7);
				}
			}
		}
	}

	.fixed {
		ul.menu {
			&>li>a {
				color: var(--font-stl-three);
			}
		}
	}

	.side-menu-overlay {
		display: none;
	}

}

@media(max-width:1024px) {
	.menu-arrow {
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		padding: 8px 10px;
		margin-left: auto;

		svg {
			fill: var(--font-stl-one);
			;
			width: 20px;
		}

		&.open {
			transform: rotate(180deg);
		}
	}

	ul.menu {
		&>li>a {
			color: var(--font-stl-one);
		}

		ul.sub-menu {
			transition: all 0.3s ease-in-out;
			display: none;

			&>li {
				padding-left: 10px;

				a {
					color: var(--font-stl-one);
				}
			}

			&.showMega {
				display: block;
			}
		}

	}

	ul.menu {
		li {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}

		ul.sub-menu {
			width: 100%;
		}
	}

	.header {
		.head-right {
			margin-left: auto;
		}

		.head-center {
			position: fixed;
			right: 0;
			top: 0;
			bottom: 0;
			width: 250px;
			background: red;
			background: var(--bgw-bgb-color);
			transform: translateX(100%);
			transition: all 0.3s;
			z-index: 2;

			&.show {
				transform: translateX(0%);
			}

			.menu-container {
				height: 100vh;
				overflow: auto;
			}

		}
	}


	.side-menu-overlay {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: #000;
		transition: 0.3s ease-in-out;
		opacity: 0.5;
		z-index: 1;
	}

	.side-menu-overlay:not(.sideOverlay) {
		visibility: hidden;
		opacity: 0;
	}

}

@media(max-width:767px) {
	.logo {
		svg {
			max-width: 120px;
		}
	}

	.toggle {
		&.toggleOpen {
			margin-right: 0;
		}
	}
}

</style>