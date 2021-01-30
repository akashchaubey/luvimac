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
				<div class="head-center">
					<div class="menu-container">
						<a href="javascript:void(0)" @click="toggleMenu()" class="toggle toggleClose d-flex align-items-center" :class="{active:show}">
							<span class="icon"></span>
						</a>
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
								<router-link to="/blog">Services</router-link>
								<ul class="sub-menu">
									<li><a href="/web-development">Web Development</a></li>
									<li><a href="/digital-marketing">Digital Marketing</a></li>
									<li>
										<a href="/digital-marketing">E commerce</a>
										<ul class="sub-menu">
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
				scrollPosition: null
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
			}
		}
	}
</script>


<style lang="scss" scoped>
	
	
</style>