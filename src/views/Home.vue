<template>
  <div class="home">
    <HeaderNavigation></HeaderNavigation>
    <div class="row">
      <div class="col-12 col-lg-5">
        <div class="jumbotron bg-white">
          <h1 class="display-4">Code for Equity</h1>
          <p class="lead">We help non-technical founders prototype,develop and launch their apps.</p>
          <hr class="my-4" />
          <p>We take 2 - 15% of equity in your startup</p>
          <hr class="my-4" />
          <p>We deliver fast and continously, allowing you to iterate over your idea and pivot whenever possible</p>
          <a @click="getstarted" class="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <HeaderImage></HeaderImage>
      </div>
    </div>
    <div class="row">
      <div>
        <div
          class="modal fade"
          id="get-started-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <AppFooter></AppFooter>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import AppFooter from "@/components/AppFooter.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";

export default {
  name: "home",
  components: {
    HeaderImage,
    HeaderNavigation,
    AppFooter
  },
  methods: {
    getstarted() {
     window.location.replace('https://forms.gle/2bwGZRCkBR7HJ4t48')
    }
  }
};
</script>
