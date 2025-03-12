<template>
  <div class="info-card">
    <div class="icon">{{ icon }}</div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  name: "InfoCard",
};
</script>

<style scoped>
.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* background: white; */
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease-in-out;
}

.info-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.description {
  font-size: 14px;
  color: #666;
}
</style>
