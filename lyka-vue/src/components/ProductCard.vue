<template>
  <div class="productCard">
    <HeroCard />
    <div class="cardContent">
      <h2 class="productName">Delicious Apples</h2>
      <div class="productCode">COD: 45999</div>
      <div class="price">
        R$
        <span class="price-value">7.93</span>
      </div>
      <!-- Should have a quantity selector here -->
      <ColorSelector />
      <Benefits />
      <Button />
    </div>
  </div>
</template>

<script>
import HeroCard from './HeroCard'
import ColorSelector from './ColorSelector'
import Benefits from './Benefits'
import Button from './Button'

export default {
	name: 'ProductCard',
	components: {
		HeroCard,
		ColorSelector,
    Benefits,
    Button
	}
};
</script>

<style>
.productCard {
  background: #fff;
  border-radius: var(--border-radius);
  padding: 2rem;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.productName {
  margin: 0;
  font-weight: bold;
}

.productCode {
  color: var(--grey);
}

.price {
  color: var(--red);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.price-value {
  font-size: 4rem;
  margin-left: 1rem;
}
</style>