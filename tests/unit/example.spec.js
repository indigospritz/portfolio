import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

import ProjectsView from '@/views/projects/ProjectsView.vue'
import AppNavbar from '@/components/AppNavbar.vue'
// import routes from '@/router/index.js'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('ProjectsView.vue', () => {
  it('renders h2 when passed', () => {
    const msg = 'Sample Project 1'
    const wrapper = shallowMount(ProjectsView, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('check if an image tag exist', () => {
  it('should have only 4 img tag in projects.vue', () => {
    const wrapper = shallowMount(ProjectsView)
    const img = wrapper.findAll('img')
    expect(img.length).toBe(4)
  })
})

describe('check if an image tag exist', () => {
  it('should have only 4 img tag in projects.vue', () => {
    const wrapper = shallowMount(AppNavbar)
    expect(wrapper.html()).toContain('projects')
  })
})
