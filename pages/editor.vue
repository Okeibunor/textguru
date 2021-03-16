<template>
  <div class="container">
    <ckeditor-nuxt class="ck-editor" v-model="content" />
  </div>
</template>

<script>
import CkeditorNuxt from "@/components/Editor";
export default {
  components: { CkeditorNuxt },
  data: function () {
    return {
      content: "",
    };
  },
  layout: "dashboard",
  async mounted() {
    let id = this.$route.params.id;
    if (id) {
      const db = this.$fire.firestore;

      const querySnapshot = db.collection("jobs").doc(id).get();
      querySnapshot
        .then((res) => {
          this.content = JSON.parse(res.data().text).value;
        })
        .catch();
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
