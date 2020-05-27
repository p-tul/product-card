<template>
    <div class="imageCard">
        <div class="productImage">
            <img class="heroImage" src='@/assets/images/green-apple-with-slice.png' alt="green apple with slice" />
            <a href="https://daiquiridigital.com/" target="_blank">
                <img class="icon icon-share" src='@/assets/icons/share.svg' alt="" />
            </a>
            <a href="">
                <img class="icon icon-heart" src='@/assets/icons/heart-line.svg' alt="" />
            </a>
        </div>
        <ImageSelector />
    </div>  
</template>

<script>
import ImageSelector from './ImageSelector'

export default {
    name: 'HeroCard',
    components: {
        ImageSelector
    }
}
</script>

<style>

.imageCard {
  /* background: #b6e352; */
  background: radial-gradient(circle, rgba(186,233,79,1) 0%, rgba(147,199,30,1) 100%);
  position: relative;
  right: 60px;
  border-radius: var(--border-radius);
  -webkit-box-shadow: 10px 10px 24px -2px #b2b2b2;
  -moz-box-shadow: 10px 10px 24px -2px rgba(178,178,178,1);
  box-shadow: 10px 10px 24px -2px rgba(178,178,178,1);
  padding-top: 2rem;
}

.heroImage {
  position: relative;
  right: 60px;
  height: 400px;
}

.icon {
  position: absolute;
  height: 30px;
}

.icon:hover {
  cursor: pointer;
}

.icon-share {
  top: 10px;
  left: 10px;
}

.icon-heart {
  top: 10px;
  right: 10px;
}
</style>