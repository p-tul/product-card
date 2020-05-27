<template>
    <div class="colorPicker">
        <div class="colorPicker-heading">Select A Colour</div>
        <ul class="colorPicker-list">
            <li class="colorPicker-list-item active"><img src='@/assets/images/green-apple2.png' alt="" /></li>
            <li class="colorPicker-list-item"><img src='@/assets/images/yellow-apple.png' alt="half " /></li>
            <li class="colorPicker-list-item"><img src='@/assets/images/orange-apple.png' alt="" /></li>
            <li class="colorPicker-list-item"><img src='@/assets/images/red-apple.png' alt="" /></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ColorSelector'
}
</script>

<style>
.colorPicker, .benefits {
  margin-bottom: 2rem;
}

.colorPicker-heading {
  color: var(--grey);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.colorPicker-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.colorPicker-list-item {
  margin-right: 10px;
  border: 1px solid transparent;
}

.colorPicker-list-item:hover {
  cursor: pointer;
}

.colorPicker-list-item.active {
  border: 1px solid var(--grey);
  border-radius: calc(var(--border-radius) / 2);
}
</style>