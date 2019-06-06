<template>
  <div id="app">
    <form @submit.prevent>
      <div class="field" id="name-field">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="name.value"
          :class="{ 'has-error': hasError(name) }"
          @change="validateField(name)"
        >
        <span class="error">{{ name.error }}</span>
      </div>

      <div class="field" id="email-field">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email.value"
          :class="{ 'has-error': hasError(email) }"
          @change="validateField(email)"
        >
        <span class="error">{{ email.error }}</span>
      </div>

      <div class="field">
        <label for="message">Message:</label>
        <textarea
          id="message"
          rows="10"
          v-model="message.value"
          :class="{ 'has-error': hasError(message) }"
          @change="validateField(message)"
        ></textarea>
        <span class="error">{{ message.error }}</span>
      </div>

      <div>
        <button type="submit">Submit form</button>
      </div>
    </form>
  </div>
</template>

<script>
import { validateText, validateEmail } from '@/utils/validation.util';

export default {
  name: 'app',
  data() {
    return {
      name: {
        value: '',
        error: '',
        validation: {
          type: 'text',
          params: { min: 2, max: 4, allowEmpty: true },
        },
      },
      email: {
        value: '',
        error: '',
        validation: {
          type: 'email',
          params: { allowEmpty: false },
        },
      },
      message: {
        value: '',
        error: '',
        validation: {
          type: 'text',
          params: { min: 2, max: 255, allowEmpty: false },
        },
      },
    };
  },
  methods: {
    hasError(field) {
      return field.error !== '';
    },
    validateField(field) {
      switch (field.validation.type) {
        case 'email':
          field.error = validateEmail(
            field.validation.params,
            field.value,
          );
          break;

        case 'text':
        default:
          field.error = validateText(
            field.validation.params,
            field.value,
          );
          break;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 30rem;
  margin: 4rem auto 0;
}

input:focus {
  outline: none;
}

.field {
  margin-bottom: 2rem;
}

.field label {
  display: block;
  font-size: 90%;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.field input,
.field textarea {
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
}

.field input + .error,
.field textarea + .error {
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 80%;
  color: #E32826;
}

.field input.has-error,
.field textarea.has-error {
  border-color: #E32826;
}

.field input.has-error + .error,
.field textarea.has-error + .error {
  visibility: visible;
  opacity: 1;
}

button {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #28a745;
  border: 1px solid #28a745;
  padding: 0.5rem 1rem;
  font-size: 90%;
  line-height: 1.5;
  border-radius: .25rem;
  color: #fff;
}
</style>
