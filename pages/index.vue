<template>
  <div
    class="w-full min-h-screen text-dark-surface bg-white dark:bg-dark-surface dark:text-dark-text-normal transition-all duration-300 ease-in"
  >
    <div class="w-full max-w-md mx-auto pt-20 px-4">
      <div>
        <SectionLinksPlans
          :sectionName="sectionPlansShortcuts.sectionName"
          :planItems="sectionPlansShortcuts.items"
          :itemsType="sectionPlansShortcuts.itemsType"
        />
      </div>
      <div class="mt-16">
        <SectionLinksSimple
          :sectionName="sectionSimpleShortcuts.sectionName"
          :simpleItems="sectionSimpleShortcuts.items"
          :itemsType="sectionSimpleShortcuts.itemsType"
        />
      </div>
    </div>
    <ServiceWorkerDriver />
  </div>
</template>

<script setup>
import { shortCutsDb } from "~/db/shortcutsDb";
import SectionLinksPlans from "../components/section/SectionLinksPlans.vue";
import SectionLinksSimple from "~/components/section/SectionLinksSimple.vue";
import ServiceWorkerDriver from "~/components/sw/ServiceWorkerDriver.vue";
const sectionPlansShortcuts = {
  sectionName: shortCutsDb.categorys.planes,
  items: shortCutsDb.shortcuts.slice(-3),
  itemsType: shortCutsDb.shortcuts.slice(-1)[0].type,
};

const sectionSimpleShortcuts = {
  sectionName: shortCutsDb.categorys.saldo,
  items: shortCutsDb.shortcuts.slice(0, 3),
  itemsType: shortCutsDb.shortcuts[0].type,
};
</script>
