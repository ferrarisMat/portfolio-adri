<template>
	<div>
		<svg
			id="small-planet_00000008119284143526194500000001271469629192666532_"
			class="small-planet"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 64.5 64.1"
			:style="planetStyle"
			style="enable-background: new 0 0 64.5 64.1"
			xml:space="preserve">
			<g id="small-planet">
				<g>
					<circle class="st0" cx="32.4" cy="32.1" r="29" />
					<circle class="st1" cx="32.4" cy="32.1" r="29" />
					<path class="st2" d="M11.8,11.6c11.3-11.3,52.4,29.7,41,41c-11.3,11.3-29.7,11.3-41,0C0.5,41.3,0.5,22.9,11.8,11.6z" />
					<g>
						<path
							class="st3"
							d="M39.5,60.2C23.9,65,6.9,54.6,3.7,38.7c-1.1-5.1-0.8-10.5,1-15.3c-1.3,5-1.4,10.2-0.2,15.2
            C8.1,53.9,24.1,63.7,39.5,60.2L39.5,60.2z" />
					</g>
				</g>
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'SmallPlanet',
	data() {
		return {
			mouseX: 0,
			mouseY: 0,
			isTouchDevice: false,
		};
	},
	computed: {
		planetStyle() {
			return this.isTouchDevice
				? {}
				: {
						transform: `translate(${this.mouseX / 20}px, ${this.mouseY / 20}px)`,
				  };
		},
	},
	mounted() {
		this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		if (!this.isTouchDevice) {
			window.addEventListener('mousemove', this.handleMouseMove);
		}
	},
	beforeDestroy() {
		if (!this.isTouchDevice) {
			window.removeEventListener('mousemove', this.handleMouseMove);
		}
	},
	methods: {
		handleMouseMove(event) {
			this.mouseX = event.clientX - window.innerWidth / 2;
			this.mouseY = event.clientY - window.innerHeight / 2;
		},
	},
};
</script>

<style scoped>
::v-deep .st0 {
	fill: #2e3558;
}

::v-deep .st1 {
	opacity: 0.5;
	fill: #3a105b;
}

::v-deep .st2 {
	fill: #33406d;
}

::v-deep .st3 {
	fill: #15ffa8;
}

.small-planet {
	width: 60px;
}
</style>
