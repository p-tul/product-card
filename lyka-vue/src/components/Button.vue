<template>
  <button class='btn btn-primary'>Add to cart</button>
</template>

<script>
export default {
    name: 'Button'
}
</script>

<style>
.btn {
  padding: 1rem 3rem;
  font-size: 1.1rem;
  background: transparent;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  /* font-weight: bold; */
  -webkit-box-shadow: 0px 0px 24px 0px #b2b2b2;
  -moz-box-shadow: 0px 0px 24px 0px #b2b2b2;
  box-shadow: 0px 0px 24px 0px #b2b2b2;
  transition: all 300ms;
}

.btn:hover {
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 24px 2px #b2b2b2;
  -moz-box-shadow: 0px 0px 24px 2px #b2b2b2;
  box-shadow: 0px 0px 24px 2px #b2b2b2;
}

.btn.btn-primary {
  background: var(--red);
  border: none;
  color: #fff;
}

.btn.btn-primary:hover {
  filter: brightness(1.1);
}
</style>