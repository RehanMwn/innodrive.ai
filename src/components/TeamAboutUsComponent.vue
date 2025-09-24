<template>
  <!-- Main Team -->
  <div class="row myFont">
    <div class="col-12 q-py-xl">
      <div class="row justify-center text-h3 text-bold">Our Founders</div>
      <div class="row justify-center q-my-md text-subtitle1 text-grey">
        Meet our awesome and expert team members.
      </div>

      <div class="row justify-center q-py-md">
        <div
          class="col-12 col-sm-6 col-md-4 q-px-xl"
          v-for="(main, index) in teamMainCard"
          :key="main.name"
        >
          <q-card
            @mouseover="hover[index] = true"
            @mouseleave="hover[index] = false"
            class="gradient-color text-white q-my-md"
            style="
              position: relative;
              overflow: hidden;
              height: auto;
              border-radius: 10px;
            "
          >
            <q-card-section class="text-center" style="position: relative">
              <div v-if="!hover[index]" class="text-h6 text-bold">
                {{ main.name }}
              </div>
              <div v-if="!hover[index]" class="text-subtitle2">
                {{ main.position }}
              </div>
              <img
                v-if="hover[index]"
                :src="main.image"
                alt="Image"
                class="team-image"
              />
              <div v-if="hover[index]" class="social-icons">
                <a
                  v-for="(link, icon) in main.socialLinks"
                  :key="icon"
                  :href="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="getIconName(icon.toString())"
                    class="social-icon"
                  />
                </a>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Members Team -->
    <!-- <div class="col-12 text-center q-py-xl">
      <div class="row justify-center text-h3 text-bold">Our Division</div>
      <div class="row justify-center q-my-md text-subtitle1 text-grey">
        Driving innovation through tailored AI solutions for every need.
      </div>

      <div class="row justify-center q-py-md">
        <div
          class="col-12 col-sm-6 col-md-4 q-px-xl"
          v-for="(member, index) in teamMemberCard"
          :key="member.name"
        >
          <q-card
            @mouseover="hoverMember[index] = true"
            @mouseleave="hoverMember[index] = false"
            class="gradient-color text-white q-my-md"
            style="
              position: relative;
              overflow: hidden;
              height: auto;
              border-radius: 10px;
            "
          >
            <q-card-section class="text-center" style="position: relative">
              <div v-if="!hoverMember[index]" class="text-h6 text-bold">
                {{ member.name }}
              </div>
              <div v-if="!hoverMember[index]" class="text-subtitle1">
                {{ member.position }}
              </div>
              <img
                v-if="hoverMember[index]"
                :src="member.image"
                alt="Image"
                class="team-image"
              />
              <div v-if="hoverMember[index]" class="social-icons">
                <a
                  v-for="(link, icon) in member.socialLinks"
                  :key="icon"
                  :href="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="getIconName(icon.toString())"
                    class="social-icon"
                  />
                </a>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { teamMainCard } from 'src/pages/AboutPage';
// import { teamMemberCard } from 'src/pages/AboutPage';
import { ref } from 'vue';

// Buat array ref untuk melacak status hover masing-masing card
const hover = ref<boolean[]>(Array(teamMainCard.length).fill(false));
// const hoverMember = ref<boolean[]>(Array(teamMemberCard.length).fill(false));

const getIconName = (platform: string): string => {
  const iconMap: { [key: string]: string } = {
    facebook: 'assets/icon/facebook.png',
    linkedin: 'assets/icon/linkedin.png',
    instagram: 'assets/icon/instagram.png',
  };
  return iconMap[platform] || 'assets/icons/default.png';
};
</script>

<style scoped>
.team-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}
.social-icons {
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .social-icons {
    gap: 0.5rem;
  }
  .social-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
