<template>
  <ckeditor
    :editor="editor"
    :value="value"
    :config="config"
    :tagName="tagName"
    :disabled="disabled"
    @input="(event) => $emit('input', event)"
  />
</template>
<script>
let ClassicEditor;
let CKEditor;

if (process.client) {
  ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
  CKEditor = require("@ckeditor/ckeditor5-vue2");
} else {
  CKEditor = { component: { template: "<div></div>" } };
}

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    tagName: {
      type: String,
      required: false,
      default: "div",
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    uploadUrl: {
      type: String,
      required: false,
    },
    config: {
      type: Object,
      required: false,
      default: function () {},
    },
  },
  data() {
    return {
      editor: ClassicEditor,
    };
  },
};
</script>

<style lang="scss" scoped>
.ck-editor__editable_inline {
  min-height: 500px;
  min-width: 800px;
  @media screen and (max-width: 768px) {
    min-width: 300px;
    min-height: 800px;
  }
}
</style>
