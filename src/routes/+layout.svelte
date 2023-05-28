<script>
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen">
	<Navbar />
	<slot />
</div>
<Footer />
