<template>
    <div class="benefits">
        <div class="benefits-heading">Benefits</div>
        <ul class="benefits-list">
            <li>Apples are nutritious</li>
            <li>Apples may be good for weight loss</li>
            <li>Apples may be good for bone health</li>
            <li>They're linked to lower risk of diabetes</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Benefits'
}
</script>

<style>
.benefits-heading {
  color: var(--grey);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.benefits-list {
  padding-left: 18px;
  margin: 0;
}
</style>