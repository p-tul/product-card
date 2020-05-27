<template>
  <div id="app">
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard";
export default {
  name: "App",
  components: {
    ProductCard
  }
};
</script>

<style global>
	:root {
		--border-radius: 6px;
		--red: #ec4c3d;
		--grey: #b6b6b6;
	}

* {
  box-sizing: border-box;
}

body {
  background: rgb(103, 222, 137);
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


</style>
