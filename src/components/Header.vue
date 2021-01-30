<template>
	<header id="header" name="fadeIn" delay="0s" duration="1s" :iteration="1" :offset="0" animateClass="animated"
		:begin="true" :class="{fixed: scrollPosition > 100}">
		<nav class="navbar navbar-expand-lg" id="main_navbar">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand">
					<img src="../../public/img/logo/logo.svg" alt="logo">
				</router-link>
				<div class="btn-dark-light">
					<button @click="toggleColor()">
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 302.4 302.4"
							style="enable-background:new 0 0 302.4 302.4;" xml:space="preserve">
							<path
								d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6 c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z" />
							<path
								d="M151.2,51.6c5.6,0,10.4-4.8,10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4c-5.6,0-10.4,4.8-10.4,10.4v30.8 C140.8,46.8,145.6,51.6,151.2,51.6z" />
							<path
								d="M236.4,80.8l22-22c4-4,4-10.4,0-14.4s-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4C225.6,84.8,232,84.8,236.4,80.8z" />
							<path
								d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4 C302.4,145.6,297.6,140.8,292,140.8z" />
							<path
								d="M236,221.6c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0s4-10.4,0-14.4L236,221.6z" />
							<path
								d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8 C161.6,255.6,156.8,250.8,151.2,250.8z" />
							<path
								d="M66,221.6l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22c4-4,4-10.4,0-14.4C76.8,217.6,70.4,217.6,66,221.6z" />
							<path
								d="M51.6,151.2c0-5.6-4.8-10.4-10.4-10.4H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.8,10.4,10.4,10.4h30.8 C46.8,161.6,51.6,156.8,51.6,151.2z" />
							<path
								d="M66,80.8c4,4,10.4,4,14.4,0s4-10.4,0-14.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4L66,80.8z" />
						</svg>
					</button>
				</div>
				<button @click="toggleMenu()" :class="{active:show}" id="button-click" class="navbar-toggler collapsed" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div :class="{show:show}" class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav m-auto">
						<li class="nav-item active">
							<router-link to="/" class="nav-link">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/about" class="nav-link">About</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/blog" class="nav-link">Blog</router-link>
						</li>
						<li class="nav-item dropdown">

							<router-link to="/services" class="nav-link d-flex" id="navbarDropdown" role="button"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span>Services</span><i class="icon icofont-simple-down ml-auto align-self-center"></i>
							</router-link>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="/web-development"><span>Web Development</span></a>
								</li>
								<li><a class="dropdown-item" href="/digital-marketing"><span>Digital
											Marketing</span></a></li>
								<li class="nav-item dropdown">
									<a class="dropdown-item doggle-menu d-flex" href="#" id="subMenu" role="button"
										data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span>E commerce</span><i
											class="icon icofont-thin-right ml-auto align-self-center"></i>
									</a>
									<ul class="dropdown-menu subMenu" aria-labelledby="subMenu">
										<li><a class="dropdown-item" href="/magento"><span>Magento</span></a></li>
										<li><a class="dropdown-item" href="/wordpress"><span>Wordpress</span></a></li>
										<li><a class="dropdown-item" href="/custom-php"><span>Custom php</span></a></li>
									</ul>
								</li>
							</ul>
						</li>

						<li class="nav-item">
							<router-link to="/our-work" class="nav-link">Our Work</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/contact-us" class="nav-link">Conctact Us</router-link>
						</li>
					</ul>
					<div class="head-right">
						<ul class="social">
							<li>
								<a href="#">
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25"
										style="enable-background:new 0 0 25 25;" xml:space="preserve">
										<g>
											<path d="M22.3,7h-6.1V5.5h6.1V7z M12.1,13.2c0.4,0.6,0.6,1.4,0.6,2.2c0,0.9-0.2,1.7-0.7,2.4c-0.3,0.5-0.6,0.9-1.1,1.2
		c-0.5,0.4-1.1,0.6-1.7,0.8C8.5,19.9,7.8,20,7.1,20H0.3V4.9h7.3c1.8,0,3.2,0.6,3.9,1.6c0.5,0.6,0.7,1.4,0.7,2.3S12,10.5,11.5,11
		c-0.3,0.3-0.6,0.6-1.2,0.9C11.2,12.2,11.8,12.6,12.1,13.2z M3.8,10.8H7c0.7,0,1.2-0.1,1.6-0.4C9,10.2,9.2,9.8,9.2,9.1
		S8.9,7.9,8.4,7.7C7.9,7.6,7.3,7.5,6.6,7.5H3.8V10.8z M9.5,15.2c0-0.8-0.3-1.3-1-1.6c-0.4-0.2-0.9-0.3-1.5-0.3H3.8v4H7
		c0.7,0,1.2-0.1,1.5-0.3C9.2,16.8,9.5,16.2,9.5,15.2L9.5,15.2z M24.6,12.8c0.1,0.5,0.1,1.2,0.1,2.2h-7.9c0,1.1,0.4,1.9,1.1,2.3
		c0.4,0.3,1,0.4,1.6,0.4s1.2-0.2,1.6-0.5c0.2-0.2,0.4-0.4,0.6-0.7h2.9c-0.1,0.6-0.4,1.3-1.1,2c-1,1.1-2.3,1.6-4.1,1.6
		c-1.4,0-2.7-0.4-3.8-1.3s-1.7-2.3-1.7-4.4c0-1.9,0.5-3.3,1.5-4.3s2.3-1.5,3.9-1.5c0.9,0,1.8,0.2,2.6,0.5c0.8,0.3,1.4,0.9,1.9,1.6
		C24.2,11.2,24.5,11.9,24.6,12.8z M21.7,13.1c-0.1-0.8-0.3-1.3-0.8-1.7s-1-0.6-1.7-0.6s-1.3,0.2-1.7,0.6c-0.4,0.4-0.7,1-0.8,1.7
		H21.7L21.7,13.1z" />
										</g>
									</svg>
								</a>
							</li>
							<li>
								<a href="#">
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25"
										style="enable-background:new 0 0 25 25;" xml:space="preserve">
										<path d="M24.4,5.1c-0.9,0.4-1.8,0.6-2.8,0.8c1-0.6,1.8-1.6,2.1-2.7c-0.9,0.6-2,1-3.1,1.2c-0.9-0.9-2.1-1.5-3.5-1.5
	c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1c-4-0.2-7.6-2.1-10-5.1C1.8,4.4,1.6,5.2,1.6,6.1c0,1.7,0.9,3.2,2.2,4
	c-0.8,0-1.5-0.2-2.2-0.6v0.1c0,2.4,1.7,4.3,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,1.9,2.4,3.3,4.5,3.4
	C6.1,19.2,4,20,1.8,20c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.7,2.2,7.4,2.2c8.9,0,13.8-7.4,13.8-13.8c0-0.2,0-0.4,0-0.6
	C22.9,6.9,23.6,6,24.4,5.1L24.4,5.1z" />
									</svg>
								</a>
							</li>
							<li>
								<a href="#">
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25"
										style="enable-background:new 0 0 25 25;" xml:space="preserve">
										<path d="M17.9,8.4h-3.7V5.9c0-0.9,0.6-1.1,1-1.1h2.6v-4h-3.6c-4,0-4.9,3-4.9,4.9v2.7H7.1v4.1h2.3v11.6h4.8V12.5h3.3L17.9,8.4
	L17.9,8.4z" />
									</svg>

								</a>
							</li>
						</ul>

					</div>
				</div>
			</div>
		</nav>
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
	.btn-dark-light {
		svg {
			width: 25px;
			fill: #fff
		}
	}

	@media(min-width: 992px) {
		.btn-dark-light {
			order: 3;
		}
	}
</style>