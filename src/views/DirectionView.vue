<template>

</template>

<style>
.page-container {
  padding-top: 15%;
  width: 80%;
  margin: 0 auto;
  font-family: sans-serif;
  color:#12274a;
}

.header {
  text-align: center;
  margin-top: 20px;
}

.header h1 {
  font-size: 24px;
  font-weight: bold;
  position: relative;
  right: 40%;
  /* font-family: MisoBold, serif; */
}

.intro {
  margin: 20px 0;
  padding: 16px;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.intro h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.intro ul {
  list-style-type: disc;
  margin-left: 24px;
  margin-top: 8px;
}

.content {
  display: flex;
  align-items: center;
  margin: 20px 0;

  .text-block {
    box-shadow: 0 0 35px 0 rgba(0, 0, 0, .09);
    border-radius: 20px;
  }
}

.content.reverse {
  flex-direction: row-reverse;
}

.text-block {
  width: 50%;
  padding: 20px;

  p {
    text-align: justify;
  }

}

.text-block h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.text-block p {
  margin-top: 8px;
}

.image-block {
  width: 50%;
}

.image-block img {
  width: 100%;
  border-radius: 8px;
  height: 330px;
}
</style>