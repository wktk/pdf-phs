<template>
  <div id="app">
    <h1>PDF にスキャン風のノイズを乗せるやつ</h1>
    <button id="upload" onclick="document.getElementById('file').click()">
      PDF ファイルを選択...
    </button>
    <input
      id="file"
      type="file"
      name="file"
      accept="application/pdf,.pdf"
      @change.prevent="convert"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PDFJS from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const readFile = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(new Uint8Array(fileReader.result));
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(file);
  });
};

export default Vue.extend({
  name: "App",
  components: {},
  methods: {
    async convert(event) {
      // Load the PDF
      const file = event.target.files[0];
      const typedarray = await readFile(file);
      const pdf = await PDFJS.getDocument(typedarray).promise;

      // TODO: Get All pages
      const page = await pdf.getPage(1);

      // Render a page on a virtual canvas
      const canvas = document.createElement("canvas");
      const viewport = page.getViewport({ scale: 3 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const canvasContext = canvas.getContext("2d");
      await page.render({ canvasContext, viewport }).promise;

      // Add some random
      const imageData = canvasContext.getImageData(0, 0, viewport.width, viewport.height);
      for (let x = 0; x < imageData.data.length; x += 4) {
        const data = imageData.data[x] + imageData.data[x + 1] + imageData.data[x + 2];
        const white = data > (1 - Math.random() * 0.7) * 255 * 3;
        imageData.data[x] = imageData.data[x + 1] = imageData.data[x + 2] = white ? 255 : 0;
      }
      canvasContext.putImageData(imageData, 0, 0);

      // FIXME: debug
      open(canvas.toDataURL("image/png"));
      //open(canvas2.toDataURL("image/png"));
    }
  }
});
</script>

<style>
#app {
  font-family: Hiragino, Meiryo, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#upload {
  background: #ca3a6f;
  border-radius: 5px;
  color: #fefefe;
  display: block;
  font-size: medium;
  margin: auto;
  padding: 1em;
}

#upload:hover {
  background: #da4a7f;
}

#file {
  visibility: hidden;
}
</style>
