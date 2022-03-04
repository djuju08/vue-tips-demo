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
      <RouterLink to="/v-model">v-model</RouterLink>
    </template>

    The underlying prop and event (by default and customisable)
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <RouterLink to="/mutate-prop"
        >mutation of a prop in child component</RouterLink
      >
    </template>

    You can't use a prop in a v-model on a child component, you need to use a
    computed/watch and a data property
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
    <template #heading>
      <RouterLink to="/v-for">v-for and key</RouterLink>
    </template>
    The misuse of the index as key
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
