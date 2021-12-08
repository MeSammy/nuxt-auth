<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Login</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
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
                placeholder="Password"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="invalid-feedback" v-if="errors.password">
                {{ errors.password }}
              </div>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Login"
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
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.login({ data: this.form });
      } catch (error) {
        return;
      }
      this.$router.push(
        this.$route.query.redirect ? this.$route.query.redirect : "/"
      );
    },
  },
};
</script>
