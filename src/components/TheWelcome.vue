<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import ToolingIcon from "./icons/IconTooling.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <RouterLink to="/mutate-prop"
        >mutation of a prop in child component</RouterLink
      >
    </template>

    You can't use a <code>prop</code> in a <code>v-model</code> on a child component, you need to use a
    <code>computed</code>/<code>watch</code> and a data property
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <RouterLink to="/watch">watch</RouterLink>
    </template>
    The use of <code>deep:true</code> with an object property.
    <p>/!\ Don't use watch <code>deep:true</code> if you want to watch on a specific property</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>v-for and key
    </template>
    Avoid to use the index as key, it can leads to rendering issues
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <span class="green">VueJs slot</span>
    </template>
    VeeJs provide the <code>slot content</code> that allows you to provide custom(s) template(s) to a component.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading
      ><a href="https://vee-validate.logaretm.com/v4/" target="_blank">
        Vee-validate
      </a></template
    >

    Vee validate is a form validation library made for VueJs.
    <ul>
      <li>Library can be used in combination with a custom UI library</li>
      <li>Validations by using yup.js</li>
      <li>(or) Validations by vee validate validators</li>
    </ul>

    <p>
      Find an example
      <RouterLink to="/form-validation">here</RouterLink>
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <a href="https://vitejs.dev/" target="_blank">Vite</a>
    </template>
    The webpack replacement and new vue 3 default
  </WelcomeItem>
</template>
