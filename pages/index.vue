<template>
	<div id="app">
		<small-planet class="small-planet"></small-planet>
		<div ref="planetAnim" class="planet-animation"></div>
		<div ref="starsAnim" class="stars-animation"></div>
		<div ref="logoAnim" class="logo-animation"><h1>Adrien Tardy</h1></div>
		<div class="text-animation">
			<h2>
				Website
				<span>in progress</span>
			</h2>
		</div>
		<footer>
			<a href="mailto:hello@adrientardy.com" class="footer-link">contact</a>
			<a href="https://www.instagram.com/adrien__tardy/" target="_blank" class="footer-link">instagram</a>
		</footer>
		<background></background>
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
		this.loadAnimation('planetAnim', '/temp/website-planet.json', true, true);
		this.animationTimeout = setTimeout(() => {
			this.loadAnimation('logoAnim', '/temp/logo-adrien-tardy.json', false, true);
		}, 1000);
		this.loadAnimation('starsAnim', '/temp/stars.json', true, true);
		// this.loadAnimation('textAnim', '/temp/website-in-progress.json', true, true);
	},
	beforeDestroy() {
		clearTimeout(this.animationTimeout);
	},
	methods: {
		loadAnimation(ref, path, loop, autoplay) {
			lottie.loadAnimation({
				container: this.$refs[ref],
				renderer: 'svg',
				loop,
				autoplay,
				path,
			});
		},
	},
};
</script>

<style lang="scss">
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes translateIn {
	0% {
		opacity: 0;
		transform: translate3d(0, 10px, 0);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0px);
	}
}

body {
	background: #410644;
}
.stars-animation,
.planet-animation {
	position: absolute;
	pointer-events: none;
	width: 100%;
	height: 100%;
}
.stars-animation {
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	@media screen and (max-width: 768px) {
		transform: scale(2);
	}
}
.planet-animation {
	bottom: -50%;
	left: -30%;
	transform: scale(2);
	opacity: 0;
	animation: fadeIn 2s ease-in-out forwards;
	@media screen and (max-width: 1172px) {
		transform: scale(1.5);
	}
	@media screen and (max-width: 1024px) {
		transform: scale(1.3);
	}
	@media screen and (max-width: 768px) {
		transform: scale(2.5);
		left: unset;
		bottom: -70%;
	}
}
.text-animation {
	position: absolute;
	h2 {
		font-size: 6vw;
		opacity: 0;
		line-height: 1;
		font-family: 'MBFOrigin', sans-serif;
		font-weight: 300;
		color: #ffffff;
		animation: translateIn 0.5s 2.3s ease-in-out forwards;
		span {
			opacity: 0;
			display: block;
			color: #c9b5ff;
			animation: translateIn 0.5s 2.3s ease-in-out forwards;
		}
		@media screen and (max-width: 768px) {
			font-size: 64px;
		}
		@media screen and (max-width: 580px) {
			font-size: 48px;
		}
	}
	padding: 64px;
	@media screen and (max-width: 768px) {
		padding: 48px;
	}
}
.logo-animation {
	position: absolute;
	width: 100%;
	height: 100%;
	transform: translateX(20%);
	@media screen and (max-width: 768px) {
		top: 45%;
		transform: translateX(0) translateY(-55%);
		height: unset;
	}
	@media screen and (max-width: 580px) {
		transform: translateX(0) translateY(-50%) scale(1.6);
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
	animation: fadeIn 2s ease-in-out forwards;

	@media screen and (max-width: 768px) {
		right: 16px;
		top: 32px;
		animation: float 6s ease-in-out infinite;
	}
}
footer {
	position: absolute;
	bottom: 0;
	display: flex;
	padding: 64px;
	width: 100%;
	justify-content: flex-end;
	opacity: 0;
	animation: translateIn 0.4s 2s ease-in-out forwards;
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
		bottom: 20%;
		.footer-link {
			font-size: 24px;
			line-height: 24px;
		}
	}
}
</style>
