<template>
  <div class="aa">
  <div class="responsive-container-block big-container">
  <div class="responsive-container-block container">
    <div class="responsive-container-block">
      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 img-one">
        <img alt="Ma Image" class="image-block bg-image" src="../../../public/images/téléchargementffff.jpg">
      </div>
      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 content-one">
        <p class="text-blk section-head">
            À propos de nous
        </p>
        <p class="text-blk section-text">
            Bienvenue sur notre site web de restaurant en ligne.
             Nous sommes passionnés par la cuisine délicieuse et 
             nous sommes ravis de vous offrir une expérience culinaire exceptionnelle.
        </p>
        <p class="text-blk section-text">
            Nos chefs talentueux préparent des plats avec des ingrédients frais et de haute qualité pour satisfaire vos papilles.
        </p>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script setup>

</script>

<style lang="css" scoped>
.aa{
    margin-top: 200px;
}
.responsive-cell-block {
  min-height: 75px;
}

* {
  font-family: Nunito, sans-serif;
}

a {
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  color: inherit;
}

.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  line-height: 25px;
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.responsive-container-block.container {
  max-width: 1320px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.responsive-container-block.big-container {
  justify-content: center;
  padding-top: 0px;
  padding-right: 50px;
  padding-bottom: 0px;
  padding-left: 50px;
  overflow-x: hidden;
  overflow-y: hidden;
}

.text-blk.section-text {
  color: rgb(147, 147, 147);
  max-width: 750px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  font-size: 25px;
  line-height: 27px;
}

.text-blk.section-head {
  max-width: 750px;
  font-size: 45px;
  line-height: 50px;
  font-weight: 700;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
}

.responsive-cell-block.wk-ipadp-6.wk-tab-12.wk-mobile-12.wk-desk-6.content-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
}

@media (max-width: 1024px) {
  .responsive-container-block {
    flex-direction: column-reverse;
  }

  .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-one {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one {
    display: flex;
    max-height: 300px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .bg-image {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(-90deg) scaleX(1) scaleY(1) scaleZ(1);
    width: 100%;
  }

  .responsive-container-block.container {
    margin-top: 50px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}

@media (max-width: 768px) {
  .text-blk.section-text {
    font-size: 18px;
  }

  .text-blk.section-head {
    font-size: 40px;
    line-height: 45px;
  }
}

@media (max-width: 500px) {
  .text-blk.section-head {
    font-size: 30px;
    line-height: 35px;
  }

  .responsive-container-block.big-container {
    padding-top: 0px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-left: 30px;
  }

  .text-blk.section-text {
    font-size: 16px;
    line-height: 24px;
  }

  .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one {
    max-height: 250px;
  }

  .responsive-container-block.container {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .responsive-container-block.big-container {
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 20px;
  }

  .responsive-container-block.container {
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}

</style>