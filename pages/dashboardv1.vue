<template>
  <div class="container">
    <dropzone
      id="foo"
      ref="el"
      :options="options"
      :destroyDropzone="true"
      @vdropzone-complete="afterComplete"
      v-if="!showLoader"
      ><img
        style="width: 100px; height: 100px; object-fit: contain"
        class="upload-icon"
        src="~/assets/cloudicon.svg"
      />
      <p class="primary text-sm">Drag file here to Upload</p>
      <h2><span>Or</span></h2>
      <button class="btn">Choose File</button>
      <p class="secondary text-sm">allowed files: .jpg, .jpeg, .png</p>
    </dropzone>
    <div id="loader" v-if="showLoader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
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
* {
  transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.container {
  background-color: #013a6b;
  background-image: -webkit-linear-gradient(35deg, #013a6b 50%, #004e95 50%);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}
h2 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.104);
  line-height: 0.1em;
  margin: 30px 0;
  font-weight: normal;

  span {
    background: #fff;
    padding: 0 10px;
  }
}

.primary {
  color: #156c72;
}
.secondary {
  color: rgba(0, 0, 0, 0.3);
}
.text-lg {
  font-size: 36px;
  line-height: 40px;
  word-spacing: 1px;
}
.text-sm {
  font-size: 20px;
  line-height: 30px;
}
#foo {
  /* border: 2px dashed rgb(0, 119, 199); */
  border: none;
  background-color: #ffffff;
  min-width: 40%;
  border-radius: 10px;
  transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: url("~@/assets/imageicon.png"), auto;
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -15px;
}

.uploaded {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid green;
}
.btn {
  background: linear-gradient(180deg, #156c72, #208ab8);
  border: none;
  border: none;
  padding: 13px 25px;
  color: white;
  font-size: 1.2em;
  border-radius: 7px;
  margin: 10px auto;
}
.btn:hover {
  background: linear-gradient(180deg, #e7e7e7, #e8f8ff);
  color: #156c72;
}
.btn:focus {
  background: linear-gradient(180deg, #3689ac, #1b85b6);
  outline: none;
}

.table {
  background: #ffffff;
  border-collapse: collapse;
  margin: 50px auto;
  width: 750px;
  min-width: 70%;
}
.table thead {
  background-color: rgb(236, 236, 236);
}
.table-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 40px;
  display: block;
  font-size: 0;
  overflow: hidden;
  white-space: nowrap;

  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    display: inline-block;
    position: relative;
    left: -60px;
    margin-right: 20px;
  }
}
</style>
