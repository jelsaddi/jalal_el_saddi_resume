<template>
  <div>
<h1 class="mb-0">
   <client-only>
<vue-typer
  :text="name"
  class="name"
  :repeat="0"
  :shuffle="false"
  initial-action="typing"
  :pre-type-delay="20"
  :type-delay="82"
  :erase-on-complete="false"
  caret-animation="blink"
/></client-only>

<client-only>
<vue-typer
  :text="lastName"
  class="lastname"
  :style="{ color: 'red' }"
  :repeat="0"
  :shuffle="false"
  initial-action="typing"
  :pre-type-delay="1500"
  :type-delay="82"
  :pre-erase-delay="2000"
  :erase-delay="89"
  erase-style="backspace"
  :erase-on-complete="false"
  caret-animation="blink"
/>
</client-only>
</h1>

  </div>
</template>

<script>
export default {
  props:["name", "lastName"]
}
</script>
