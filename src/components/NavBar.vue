<template>
    <Disclosure as="nav" class="bg-gray-1000" style="margin-top: 1%; padding-bottom: 100%;" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 lg:px-6 lg:px-8">
        <div class="relative flex h-16 justify-between ml-80">
          <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 lg:items-stretch lg:justify-start">
            <div class="hidden lg:ml-6 lg:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-[#be61c0] text-white' : 'text-gray-300', 'rounded-sm px-3 py-2 text-lg font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="lg:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-[#be61c0] text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-sm px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Início', href: '#', current: false },
    { name: 'Sobre mim', href: '#', current: false },
    { name: 'Projetos', href: '#', current: false },
    { name: 'Experiências', href: '#', current: false },
    { name: 'Depoimento', href: '#', current: false },
    { name: 'Contatos', href: '#', current: true },

  ]
  </script>