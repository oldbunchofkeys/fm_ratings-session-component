<template>
  <div class="main__container">
    <div class="main__card">
      <article id="before-click">
        <div class="before-click__image-container">
          <img src="../assets/icon-star.svg" alt="star icon">
        </div>
        <h1>{{ heading }}</h1>
        <p>{{ body }}</p>
        <form @submit.prevent action="#">
          <div class="before-click__ratings-container">
            <input id="rating-1" name="ratings" type="radio" class="before-click__rating">
            <label for="rating-1">1</label>
            <input id="rating-2" name="ratings" type="radio" class="before-click__rating">
            <label for="rating-2">2</label>
            <input id="rating-3" name="ratings" type="radio" class="before-click__rating">
            <label for="rating-3">3</label>
            <input id="rating-4" name="ratings" type="radio" class="before-click__rating">
            <label for="rating-4">4</label>
            <input id="rating-5" name="ratings" type="radio" class="before-click__rating">
            <label for="rating-5">5</label>
          </div>
          <input @click="ratingsSession" type="submit" class="submit" value="submit">
        </form>
      </article>
      <article id="after-click">
        <img src="../assets/illustration-thank-you.svg" alt="ballot">
        <div id='report-container'>
          <p id="rating-report" class="after-click__rating-report"></p> 
        </div>
        <h2 class="after-click__heading">Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingCard',
  methods: {
    ratingsSession() {
      const ratings = document.querySelectorAll('.before-click__rating');
      const ratingReport = document.querySelector('#rating-report');
      const beforeClick = document.querySelector('#before-click');
      const afterClick = document.querySelector('#after-click');
      for (let rating of ratings) {
        if (rating.checked) {
          sessionStorage.setItem("answer", rating.id.slice(-1));
          ratingReport.textContent = `You selected ${sessionStorage.getItem("answer")} out of 5`;
          beforeClick.style.display = "none";
          afterClick.style.display = "block";
        }
      } 
    }
  },
  props: {
    heading: String,
    body: String
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
  h1, h2, p {
    font-family: 'Overpass';
  }
  h1, h2 {
    color: #fff;
    margin-bottom: 10px;
  }
  p {
    color: #969FAD;
    font-size: 14px;
    line-height: 22px;
  }
  button {
    all: unset;
  }
  .main__container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #131518;
    height: 100%;

  }
  .main__card {
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    width: 327px;
    height: 360px;
    padding: 24px;
    border-radius: 15px;
  }
  .before-click__image-container {
    background: #262E38;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  .before-click__ratings-container {
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
  }
  .before-click__ratings-container input[type="radio"] {
    display:none 
  }
  .before-click__ratings-container label {
    all: unset;
    background: #262E38;
    height: 42px;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-family: 'Overpass';
    color:#7C8798;
    cursor: pointer;
  }
  .before-click__ratings-container label:hover {
    background: #FC7614;
    color: white;
  }
  .before-click__ratings-container input[type="radio"]:checked+label {
    background: #7C8798;
    color: white;
  }
  .submit {
    all: unset;
    text-transform: uppercase;
    margin: auto;
    background: #FC7614;
    border-radius: 22.5px;
    font-family: 'Overpass';
    color: white;
    width: 100%;
    text-align: center;
    padding: 12px 0;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
  .submit:hover {
    background: white;
    color: #FC7614;
  }
  #after-click {
    display: none;
    text-align: center;
  }
  .after-click__rating-report {
    background: #262E38;
    border-radius: 22.5px;
    color: #FC7614;
    display: inline-block;
    padding: 5px 12px;
    margin: 24px 0;
  }
  @media (min-width: 767px) {
    h1, h2 {
      font-size: 28px;
      margin-bottom: 7px;
    }
    p {
      font-size: 15px;
      line-height: 24px;
    }
    .main__card {
      width: 412px;
      height: 416px;
      padding: 32px;
      border-radius: 30px;
    }
    .before-click__image-container {
      margin-bottom: 30px;
      height: 48px;
      width: 48px;
    }
    .before-click__ratings-container {
      font-size: 16px;
      margin: 32px 0;
    }
    .before-click__ratings-container label {
      height: 51px;
      width: 51px;
    }
    .after-click__rating-report {
      margin: 32px 0;
    }
  }
</style>
