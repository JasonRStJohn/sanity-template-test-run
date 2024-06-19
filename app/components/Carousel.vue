<template>
  <div class='carousel-view'>
    <transition-group
        class='carousel'
        tag="div">
      <div
          v-for="slide in slides"
          class='slide'
          :key="slide.id">
        <a href="https://google.com" style="width:100%;height:100%" target="_blank">
          <img :src="`https://placehold.co/320x320/${slide.color}/white`" />
        </a>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
  let slides = ref([
    {
      title: 'I am Slide A',
      id: 1,
      color: 'red'
    },
    {
      title: 'I am Slide B',
      id: 2,
      color: 'green'
    },
    {
      title: 'I am Slide C',
      id: 3,
      color: 'orange'
    },
    {
      title: 'I am Slide D',
      id: 4,
      color: 'yellow'
    },
    {
      title: 'I am Slide E',
      id: 5,
      color: 'blue'
    }
  ])
  
  const next = () => {
    const first = slides.value.shift()
    slides.value = slides.value.concat(first)
  }
  
  const previous = () => {
    const last = slides.value.pop()
    slides.value = [last].concat(slides.value)
  }
  
  const autoSlide = (counter) => {
    if (counter < 50) {
      counter++;
      setTimeout(function () {
        next()
        autoSlide(counter)
      }, 1000 * 5)
    }
  }
  
  autoSlide(0)

</script>

<style>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 24em;
  min-height: 25em;
}

.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1em dashed #000;
  border-radius: 50%;

  transition: transform 0.3s ease-in-out;
}

.slide:first-of-type {
  opacity: 0;
}

.slide:last-of-type {
  opacity: 0;
}
</style>