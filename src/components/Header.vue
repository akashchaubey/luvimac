<template>
	<header class="header" :class="{fixed: scrollPosition > 100}">
		<div class="side-menu-overlay" @click="toggleMenu()" :class="{sideOverlay:show}"></div>
		<div class="container">
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
										<router-link to="/digital-marketing">Digital Marketing</router-link>
									</li>
									<li>
										<router-link to="/e-commerce">E commerce</router-link>
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
							<li @click="toggleMenu()">
								<router-link to="/our-work">Our Work</router-link>
							</li>
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


</style>