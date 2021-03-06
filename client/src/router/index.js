import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Poker from '@/components/Poker'
import Mahjong from '@/components/mahjong'
import Videotape from '@/components/videotape'
import Agreement from '@/components/agreement'
import FormatJSON from '@/components/formatJSON'

import rest from '@/components/rest/Rest'
import ZipFont from '@/components/zipfont'
import New from '@/components/New'
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
      path: '/zipfont/:download',
      name: 'ZipFont',
      component: ZipFont
    },
    {
      path: '/formatJSON',
      name: 'FormatJSON',
      component: FormatJSON
    },
    {
      path: '/new/:operation',
      name: 'New',
      component: New
    },
    { path: '/rest', component: rest, name: 'RESTful' }
  ]
})
