import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Poker from '@/components/Poker'
import Mahjong from '@/components/mahjong'
import Videotape from '@/components/videotape'
import Agreement from '@/components/agreement'
import ZipFont from '@/components/zipfont'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/poker',
      name: 'Poker',
      component: Poker
    },
    {
      path: '/mahjong',
      name: 'Mahjong',
      component: Mahjong
    },
    {
      path: '/videotape',
      name: 'Videotape',
      component: Videotape
    },
    {
      path: '/agreement/:search',
      name: 'Agreement',
      component: Agreement
    },
    {
      path: '/zipfont',
      name: 'ZipFont',
      component: ZipFont
    }
  ]
})
