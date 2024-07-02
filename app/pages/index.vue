<script setup lang="ts">
import { type Page } from '~/types/Page'
import { PortableText } from '@portabletext/vue';
import type { PortableTextBlock } from '@sanity/types';

const query = groq`*[ _type == "page" && slug.current == 'home'] | order(_createdAt desc)`
const { data: pages } = await useSanityQuery<Page[]>(query)
const homepage = pages.value?.at(0)
console.log(homepage?.mainImage)
const body = homepage?.body as PortableTextBlock[]
const mainDivBackground = homepage?.mainImage ? `url(${urlFor(homepage?.mainImage).width(1920).url()})` : '';
</script>

<template>
  <section>
    <div id="hero-image">
      <img
        v-if="mainDivBackground != '' && homepage?.mainImage"
        id="hero-image-spaceholder"
        :src="$urlFor(homepage?.mainImage).width(1920).url()"
        alt="Cover image"
      />
      <h4 class="hero-heading">The Education Revolution</h4>
      <a class="call-to-action" href="#">Find Out More</a>
    </div>
    <div id="carousel-container">
      <Carousel></Carousel>
    </div>
    <div>
      <PortableText
        :value="body"
      />
    </div>
  </section>
</template>

<style>
  .hero-heading, .call-to-action{
    position:absolute;
    top: 45%;
    left: 42%;
  }
  #hero-image-spaceholder{
    width:100%;
  }
  #hero-image {
    background-image: v-bind(mainDivBackground);
    background-size: cover;
    position:relative;
    width:100%;
  }
</style>