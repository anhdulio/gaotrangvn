<template>
  <div id="lucky-card" >
    <v-layout row>
      <v-spacer></v-spacer>
      <v-flex>
        <div>
            <v-card dark height="300px" hover :style="gradient">
                <v-layout column style='height: 100%' v-on:click="changeFlip">
                  <v-spacer></v-spacer>
                  <v-flex v-on:click.stop="changeContent">
                    <div class='body-2 text-xs-center text-md-center'>
                      <span v-html="$options.filters.highlight(cardtext, cardword)">{{ cardtext }}</span>
                    </div>
                  </v-flex>
                </v-layout>      
            </v-card>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import Vue from 'vue/dist/vue.esm'

  Vue.filter('highlight', function(word, query){
    var check = new RegExp(query, "ig");
    return word.toString().replace(check, function(matchedText,a,b){
        return ('<strong class="amber--text text--darken-2">' + matchedText + '</strong>');
    });
  });

  export default {
    props: ['content'],
    data: function () {
      return {
        isquote: true,
        isflip: false
      }
    },
    computed: {
      gradient () {
        return 'background-image: ' + this.cardinfo.gradient;
      },
      cardinfo () {
        if (this.isquote) {
          return this.content.quote
        } else {
          return this.content.definition
        }
      },
      cardtext () {
        if (!this.isflip) {
          return this.cardinfo.main
        } else {
          return this.cardinfo.flipped
        } 
      },
      cardword () {
        if (!this.isflip) {
          return this.content.highlight.main
        } else {
          return this.content.highlight.flipped
        } 
      }
    },
    methods: {
      changeContent () {
        this.isquote = !this.isquote
        this.isflip = false
      },
      changeFlip () {
        this.isflip = !this.isflip
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 100%;
    max-width: 300px;
    text-transform: none;
    -webkit-transition: color 4s;
    transition: color 4s;
  }
  .body-2 {
    width: 90%;
    margin: 0 auto;
  }
</style>


