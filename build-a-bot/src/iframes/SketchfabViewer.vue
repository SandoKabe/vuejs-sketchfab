<template>
 <div class="container">
    <div class="iframe-container">
        <iframe 
        title="Sketchfab Viewer" 
        src="" 
        id="api-frame"
        allow="autoplay *; fullscreen *; xr-spatial-tracking *"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true">
        </iframe>
     </div>
     <div class="controls" id="controls">
       <pre id="Info" class="info">
         <button id="start">Start</button>
         <button id="stop">Stop</button>
       </pre>
     </div>
</div>
<button @click="loadmodel()">Click me to load model and show iframe.</button>
</template>

<script>
export default {
    data() {
    return {
      sketchfab: null,
      modelId: 'dd958716be0b4786b8700125eec618e5', // 'b61ebca81f19445b9561d87df4f5fbdb',
    };
  },
  methods: {
    viewerLoaded() {
      console.log('Loaded'); // never called
    },
    loadmodel(){
      const iframe = document.getElementById( 'api-frame' );
      var client = null;
      document.addEventListener('load', () => console.log( 'viewerready' ))
      // By default, the latest version of the viewer API will be used.
      var client = new Sketchfab( iframe );
      // Alternatively, you can request a specific version.
      // var client = new Sketchfab( '1.0.0', iframe );
      client.init( this.modelId, {
        success: function onSuccess( api ){
          console.log( 'Success' );
          api.load();
          api.start();
          api.addEventListener( 'viewerready', function() {
            console.log( 'Viewer is ready' );
            // once the viewer is ready, show the iframe
            let $apiFrame = document.getElementById( 'api-frame' );
            $apiFrame.classList.remove( 'hidden' ); // Remove hidden class
          });
          api.addEventListener('viewerstart', function () {
            console.log('viewerstart');
          }),
          api.addEventListener('viewerstop', function () {
            console.log('viewerstop');
          }),
          api.start(function () {
            document.getElementById('start').addEventListener('click', function () {
              api.start();
            });
            document.getElementById('stop').addEventListener('click', function () {
              api.stop();
            });
            api.addEventListener('viewerready', function () {
              console.log('viewerReady');
            });
          })
        },
        error: function onError( callback ){
          console.log( this.error );
        }
      });
    },
  },  
}
</script>

<style scoped>

html, body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;

    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscale;
    font-family: Open Sans, sans-serif;
}

* {
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.iframe-container {
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
}

.iframe-container > iframe {
    border: 0;
    width: 100%;
    flex: 1;
}

.controls {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    height: 80px;
    padding: 15px 0 0 15px;
    background-color: #F2F2F2;
    border-top: 1px solid #e7e7e7;
    overflow: scroll;
}

.controls > * {
    margin-right: 15px;
    margin-bottom: 15px;
}

button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 2px solid transparent;
    border-radius: 4px;
    padding: 0 13px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    text-align: center;
    text-shadow: none;
    text-transform: uppercase;
    line-height: 1.2;
    cursor: pointer;
    outline: none;
    transition: background .2s;
    color: white;
    background-color: #1caad9;
    height: 25px;
    font-size: 12px;
}

button.disabled {
    cursor: default;
    pointer-events: none;
    color: #ccc;
    background-color: #e7e7e7;
    transition: background-color .25s ease;
}

.description {
    box-sizing: border-box;
    position: absolute;
    padding: 30px;
    top: 30px;
    right: 30px;
    width: 240px;
    background: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    border-radius: 3px;
    z-index: 2;

    opacity: 0;
    pointer-events: none;
}

.description.--active {
    opacity: 1;
    pointer-events: all;
}

.description iframe,
.description img {
    max-width: 100%;
    height: auto;
}
.info {
  display: flex;
}
.info > button {
  margin: 5px;
}
</style>
