import { createRouter, createWebHistory } from 'vue-router'
import PKIndexView from '../views/PK/PKIndexView'
import RecordsIndexView from '../views/Records/RecordsIndexView'
import RankListIndex from '../views/RankList/RankListIndexView'
import UserBotIndex from '../views/Users/Bots/UserBotIndexView'
import NotFound from '../views/Errors/NotFound'

const routes = [
  {
    path:'/',
    name:"home",
    redirect:"/pk/"
  },
  {
    path:"/pk/",
    name:"pk_index",
    component: PKIndexView,
  },
  {
    path:"/records/",
    name:"records_index",
    component: RecordsIndexView,
  },
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component: RankListIndex,
  },
  {
    path:"/users/mybots/",
    name:"users_bot_index",
    component: UserBotIndex,
  },
  {
    path:"/404/",
    name:"404",
    component: NotFound,
  },
  {
    path:"/:catchAll(.*)",
    redirect:"/404/"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
