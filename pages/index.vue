<template>
	<div id="app">
		<small-planet class="small-planet"></small-planet>
		<div ref="planetAnim" class="planet-animation"></div>
		<div ref="starsAnim" class="stars-animation"></div>
		<div ref="logoAnim" class="logo-animation"><h1>Adrien Tardy</h1></div>
		<div ref="textAnim" class="text-animation"><h2>Website in progress</h2></div>
		<footer>
			<a href="mailto:hello@adrientardy.com" class="footer-link">contact</a>
			<a href="https://www.instagram.com/adrien__tardy/" target="_blank" class="footer-link">instagram</a>
		</footer>
	</div>
</template>

<script>
import lottie from 'lottie-web';

export default {
	name: 'IndexPage',
	data() {
		return {
			animationTimeout: null,
		};
	},
	head: {
		title: 'Adrien Tardy - Portfolio',
		meta: [
			{ hid: 'description', name: 'description', content: 'Adrien Tardy Portfolio' },
			{ hid: 'og:title', property: 'og:title', content: 'Adrien Tardy - Portfolio' },
			{ hid: 'og:description', property: 'og:description', content: 'Website in development' },
			{ hid: 'og:image', property: 'og:image', content: require('@/assets/temp.webp') },
		],
	},
	mounted() {
		lottie.loadAnimation({
			container: this.$refs.planetAnim,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: '/temp/website-planet.json',
		});
		this.animationTimeout = setTimeout(() => {
			lottie.loadAnimation({
				container: this.$refs.logoAnim,
				renderer: 'svg',
				loop: false,
				autoplay: true,
				path: '/temp/logo-adrien-tardy.json',
			});
		}, 1000);
		lottie.loadAnimation({
			container: this.$refs.starsAnim,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: '/temp/stars.json',
		});
		lottie.loadAnimation({
			container: this.$refs.textAnim,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: '/temp/website-in-progress.json',
		});
	},
	beforeDestroy() {
		clearTimeout(this.animationTimeout);
	},
	methods: {},
};
</script>

<style lang="scss">
body {
	@include main-bg;
}
.stars-animation,
.planet-animation {
	position: absolute;
	pointer-events: none;
	width: 100%;
	height: 100%;
}
.planet-animation {
	bottom: -50%;
	left: -30%;
	transform: scale(2);
	@media screen and (max-width: 1172px) {
		transform: scale(1.5);
	}
	@media screen and (max-width: 1024px) {
		transform: scale(1.3);
	}
	@media screen and (max-width: 768px) {
		transform: scale(2.2);
		left: unset;
		bottom: -70%;
	}
}
.text-animation {
	position: absolute;
	h2 {
		text-indent: -1000000px;
		position: absolute;
	}
	padding: 64px;
}
.logo-animation {
	position: absolute;
	width: 100%;
	height: 100%;
	transform: translateX(20%);
	@media screen and (max-width: 768px) {
		transform: translateX(0) translateY(50%);
		height: unset;
	}
	h1 {
		text-indent: -1000000px;
		position: absolute;
	}
}
.small-planet {
	position: absolute;
	right: 64px;
	top: 64px;
}
footer {
	position: absolute;
	bottom: 0;
	display: flex;
	padding: 64px;
	width: 100%;
	justify-content: flex-end;
	.footer-link {
		font-size: 36px;
		line-height: 36px;
		color: #15ffa8;
		font-family: 'MBFOrigin', sans-serif;
		position: relative;
		padding-bottom: 4px;
		&:not(:last-child) {
			margin-right: 48px;
			&::before {
				position: absolute;
				content: '';
				display: block;
				height: 100%;
				width: 3px;
				background: #ffffff;
				top: 50%;
				transform: translateY(-50%);
				right: calc(-24px - 1.5px);
				pointer-events: none;
			}
		}
		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			height: 3px;
			width: 100%;
			background: #15ffa8;
			transform: scaleX(0);
			transform-origin: right;
			transition: transform 0.4s cubic-bezier(0.6, 0, 0.6, 1);
		}

		&:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	}
	@media screen and (max-width: 768px) {
		justify-content: center;
		bottom: 30%;
		.footer-link {
			font-size: 24px;
			line-height: 24px;
		}
	}
}
</style>
