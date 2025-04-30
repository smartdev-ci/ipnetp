<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue';
import CourseCard from './CourseCard.vue';

const courses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    teacher: 'Robert Black',
    date: 'June 2025',
    description: 'This is a comprehensive introduction to programming concepts. Learn the fundamentals of coding and problem-solving through hands-on projects.',
    price: 49.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Digital Marketing Essentials',
    teacher: 'Sarah White',
    date: 'July 2025',
    description: 'Master the essential tools and strategies of digital marketing in this practical course for beginners and marketing professionals alike.',
    price: 39.99,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Advanced Mathematics',
    teacher: 'Michael Blue',
    date: 'July 2025',
    description: 'Explore advanced mathematical concepts with practical applications in science, engineering, and data analysis in this comprehensive course.',
    price: 59.99,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];
</script>

<template>
  <section class="courses-section section">
    <div class="container">
      <SectionHeader 
        title="POPULAR COURSES" 
        subtitle="Find the right course for your educational journey" 
      />
      
      <div class="courses-grid grid-3">
        <CourseCard 
          v-for="course in courses" 
          :key="course.id" 
          :course="course" 
        />
      </div>
      
      <div class="courses-footer">
        <button class="btn btn-outline">Browse All Courses</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.courses-section {
  background-color: var(--background-light);
}

.courses-grid {
  margin-bottom: var(--space-xl);
}

.courses-footer {
  text-align: center;
  margin-top: var(--space-xl);
}
</style>