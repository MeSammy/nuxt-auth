<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Register</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label>Name</label>
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Name"
                :class="{ 'is-invalid': errors.name }"
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name }}
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="form.email"
                type="email"
                class="form-control"
                placeholder="Email"
                :class="{ 'is-invalid': errors.email }"
              />
              <div class="invalid-feedback" v-if="errors.email">
                {{ errors.email }}
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                v-model="form.password"
                type="passwrod"
                class="form-control"
                placeholder="password"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="invalid-feedback" v-if="errors.password">
                {{ errors.password }}
              </div>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Register"
                class="btn btn-secondary w-100"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "guest",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("/auth/register", this.form);

        this.$auth.login({ data: this.form });

        this.$router.push({ name: "index" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
