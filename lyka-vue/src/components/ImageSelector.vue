<template>
  <div class="imageSelector">
        <ul class="imageSelector-list">
            <li class="imageSelector-list-item"><img src='@/assets/images/green-apple2.png' alt="green apple" /></li>
            <li class="imageSelector-list-item"><img src='@/assets/images/half-apple.png' alt="half apple" /></li>
            <li class="imageSelector-list-item"><img src='@/assets/images/green-apple-flipped.png' alt="flipped apple" /></li>
            <li class="imageSelector-list-item"><img src='@/assets/images/apple-top.png' alt="apple top" /></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ImageSelector'
}
</script>

<style>

.imageSelector {
  background: #fff;
  padding: 20px;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  
}

.imageSelector-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}

.imageSelector-list-item {
  border: 1px solid var(--grey);
  border-radius: calc(var(--border-radius) / 2);
}

.imageSelector-list-item:hover {
  cursor: pointer;
}

</style>