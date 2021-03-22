<template>
  <div class="upload_wrap">
    <dropzone
      class="upload"
      ref="el"
      :options="options"
      :destroyDropzone="true"
      @vdropzone-complete="afterComplete"
      ><img
        style="width: 100px; height: 100px; object-fit: contain"
        class="upload-icon"
        src="~/assets/cloudicon.svg"
      />
      <p class="text-upload mid">Drag file here to Upload</p>
      <button class="btn">Choose File</button>
      <p class="text-upload small">allowed files: .jpg, .jpeg, .png</p>
    </dropzone>
  </div>
</template>


<script>
import firebase from "firebase";
import Dropzone from "nuxt-dropzone";
import axios from "axios";
import "nuxt-dropzone/dropzone.css";
import { gsap } from "gsap";
let uuid = require("uuid");

export default {
  components: {
    Dropzone,
  },
  layout: "dashboard",
  data() {
    return {
      options: {
        url: "http://httpbin.org/post",
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        addRemoveLinks: true,
        acceptedFiles: ".jpg, .jpeg, .png",
      },
      images: [],
      showLoader: false,
    };
  },
  methods: {
    async afterComplete(upload) {
      var imageName = uuid.v1();
      this.isLoading = true;
      try {
        //save image
        let file = upload;
        var metadata = {
          // contentType: "image/png",
        };
        var storageRef = firebase.storage().ref();

        var imageRef = storageRef.child(`images/${imageName}`);
        this.showLoader = true;
        // save image to storage
        await imageRef.put(file, metadata);
        //get the download url for uploaded image
        var downloadURL = await imageRef.getDownloadURL();
        //save this data to firestore collection
        this.images.push({ src: downloadURL });

        //change image to text
        let text = await this.imageToText(upload);

        this.saveJob(downloadURL, text, "admin");
      } catch (error) {
        console.log(error);
      }
      // this.$refs.el.removeFile(upload);
    },

    saveJob: function (image_url, text, user_id) {
      this.$fire.firestore
        .collection("jobs")
        .add({
          created_at: firebase.firestore.Timestamp.now(),
          image_url: image_url,
          text: text,
          user_id: user_id,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.showLoader = false;
          this.$router.push({ name: "editor", params: { id: docRef.id } });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    imageToText: async function (image) {
      let finalValue;
      const form = new FormData();
      form.append("srcImg", image);
      form.append("Session", this.makeid(8));

      const options = {
        method: "POST",
        url: "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/",
        headers: {
          "content-type":
            "multipart/form-data; boundary=---011000010111000001101001",
          "x-rapidapi-key":
            "f698cc54d4msh2983196e8355cd5p1e8100jsnaf81ce174bc1",
          "x-rapidapi-host": "pen-to-print-handwriting-ocr.p.rapidapi.com",
        },
        data: form,
      };

      await axios
        .request(options)
        .then(function (response) {
          finalValue = response;
          localStorage.setItem("text_extract", JSON.stringify(finalValue.data));
        })
        .catch(function (error) {
          return null;
        });
      return localStorage.getItem("text_extract");
    },
    makeid: function (length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
  middleware: ["authenticated"],

  mounted() {
    // Everything is mounted and you can access the dropzone instance
    const instance = this.$refs.el.dropzone;
  },
};
</script>



<style lang="scss" scoped>
@import "../assets/css/_typography.scss";
@import "../assets/css/_colors.scss";
@import "../assets/css/_main.scss";
.upload_wrap {
  padding: 1.875rem;
  border-radius: 1.875rem;
  box-shadow: 0rem 0.1875rem 0.25rem rgba(0, 0, 0, 0.25);
  margin: 2.5rem auto 1.25rem;
}
.upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.125rem 0;
  border-radius: 1.875rem;
  border: 0.125rem dashed #5dca29;
  text-align: center;
}
.upload:hover {
}
.text-upload {
  font-family: $headerfont;
  font-style: normal;
  font-weight: 300;

  color: $primary-blue;
  &.small {
    font-size: 1.25rem;
    word-spacing: 0.3125rem;
    line-height: 1.75rem;
  }
  &.mid {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

.btn {
  background-color: $primary-blue;
  border: none;
  border-radius: 0.3125rem;
  padding: 0.625rem 1.25rem;
  color: white;
  font-size: 0.9375rem;
  margin: 1.125rem auto;
}
</style>
