<template>
  <div id="app">
    <h1>PDF にノイズを乗せる &beta;</h1>
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
    <div class="notice">
      <ul>
        <li>
          PDF ファイルにランダムにノイズと歪みを追加してスキャン風にします
        </li>
        <li>ブラウザ上で動作するのでデータがネットワークを経由しません</li>
        <li>A4 縦 PDF のみ対応 (今のところ)</li>
        <li>出力は白黒になります (今のところ)</li>
      </ul>
    </div>
    <h2>出力例</h2>
    <Tweet
      class="tweet"
      id="1272963828490231808"
      :options="{ conversation: 'none' }"
    />
    <hr class="separator" />
    <address>
      <a href="https://wktk.jp/">wktk.jp</a> &middot;
      <a href="https://twitter.com/wk">@wk</a>
    </address>

    <ForkMe />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as PDFJS from "pdfjs-dist";
import jsPDF from "jspdf";

import { Tweet } from "vue-tweet-embed";
import ForkMe from "./components/ForkMe.vue";

PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry");

const readFile = (file: Blob): Promise<Uint8Array> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () =>
      resolve(new Uint8Array(fileReader.result as ArrayBuffer));
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(file);
  });
};

export default Vue.extend({
  name: "App",
  components: {
    ForkMe,
    Tweet,
  },
  methods: {
    convert: async (event: Event) => {
      // Load the PDF
      const files = (event.target as HTMLInputElement)?.files;
      const file = files && files[0];
      if (!file) throw "Invalid file";
      const typedarray = await readFile(file);
      const pdf = await PDFJS.getDocument(typedarray).promise;

      // TODO: Support formats other than portrait A4
      const orientation = "portrait";
      const format = "a4";
      const out = new jsPDF({ orientation, format, unit: "mm" });

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);

        // Prepare a virtual canvas
        const canvas = document.createElement("canvas");
        const viewport = page.getViewport({ scale: 3 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const canvasContext = canvas.getContext("2d", { alpha: false });
        if (!canvasContext) throw "Canvas is null";

        // Slightly add distortion
        const ratio = 0.008;
        canvasContext.setTransform(
          1 + (Math.random() * ratio - ratio / 2),
          Math.random() * ratio - ratio / 2,
          Math.random() * ratio - ratio / 2,
          1 + (Math.random() * ratio - ratio / 2),
          0,
          0,
        );

        // Render the page on the canvas
        await page.render({ canvasContext, viewport }).promise;

        // Add some random errors
        // TODO: Support colors
        // TODO: Support adjusting tint
        const imageData = canvasContext.getImageData(
          0,
          0,
          viewport.width,
          viewport.height,
        );
        for (let x = 0; x < imageData.data.length; x += 4) {
          const data =
            imageData.data[x] + imageData.data[x + 1] + imageData.data[x + 2];
          const white = data > (1 - Math.random() * 0.8) * 255 * 3;
          imageData.data[x] =
            imageData.data[x + 1] =
            imageData.data[x + 2] =
              white ? 255 : 0;
        }
        canvasContext.putImageData(imageData, 0, 0);

        if (i !== 1) out.addPage(format, orientation);
        out.addImage(canvas, "JPEG", 0, 0, 210, 297);
      }

      out.save(file.name.replace(/.pdf$/i, "-scan.pdf"));
    },
  },
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

.notice {
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.tweet {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.separator {
  margin: 4em auto;
}

address {
  margin-bottom: 0.5em;
}
</style>
