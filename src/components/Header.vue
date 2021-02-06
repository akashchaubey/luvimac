<template>
	<header class="header" :class="{fixed: scrollPosition > 100}">
		<div class="container-fluid">
			<div class="d-flex flex-wrap align-items-center">
				<div class="head-left">
					<div class="logo">
						<a href="#">
							<img svg-inline src="../../public/img/logo/logo.svg" alt="logo">
						</a>
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
					
					<a href="javascript:void(0)" @click="toggleMenu()" class="toggle toggleOpen d-flex align-items-center" :class="{active:show}">
						<span class="icon"></span>
					</a>
				</div>
				<div class="head-center" :class="{show:show}">
					<div class="menu-container">
						<ul class="menu">
							<li>
								<router-link to="/">Home</router-link>
							</li>
							<li>
								<router-link to="/about">About</router-link>
							</li>
							<li>
								<router-link to="/blog">Blog</router-link>
							</li>
							<li>
								<router-link to="/services">Services</router-link>
								<div class="menu-arrow" @click="showMenu('services')" :class="{ open: activeTab === 'services' }">
									<img svg-inline src="../../public/img/icons/down-arrow.svg" alt="arrow">
								</div>
								<ul class="sub-menu" :class="{ showMega: activeTab === 'services' }">
									<li><a href="/web-development">Web Development</a></li>
									<li><a href="/digital-marketing">Digital Marketing</a></li>
									<li>
										<a href="/digital-marketing">E commerce</a>
										<div class="menu-arrow" @click="showSubMenu('commerce')" :class="{ open: activeSubTab === 'commerce' }">
											<img svg-inline src="../../public/img/icons/down-arrow.svg" alt="arrow">
										</div>
										<ul class="sub-menu" :class="{ showMega: activeSubTab === 'commerce' }">
											<li><a href="/magento">Magento</a></li>
											<li><a href="/wordpress">Wordpress</a></li>
											<li><a href="/custom-php">Custom php</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<router-link to="/our-work">Our Work</router-link>
							</li>
							<li>
								<router-link to="/contact-us">Conctact Us</router-link>
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
				activeSubTab:''
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
				}else {
					this.activeTab = value
				}
				
			},
			showSubMenu(value) {
				console.log('called', value)
				if (value == this.activeSubTab) {
					this.activeSubTab = ''
				}else {
					this.activeSubTab = value
				}
				
			}
		}
	}
</script>


<style lang="scss" scoped>
	
	
</style>