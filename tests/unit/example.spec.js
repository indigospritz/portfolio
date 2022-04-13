import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

import ProjectsView from '@/views/projects/ProjectsView.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import { RouterLink } from 'vue-router'
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
    const msg = 'ProjectsLorem'
    const wrapper = shallowMount(ProjectsView, {
      props: { msg },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    expect(wrapper.text()).toContain(msg)
  })
})

describe('check if an image tag exist', () => {
  it('should have only 4 img tag in projects.vue', () => {
    const wrapper = shallowMount(ProjectsView, {
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    const img = wrapper.findAll('section')
    expect(img.length).toBe(4)
  })
})

describe('check if an image tag exist', () => {
  it('should have only 4 img tag in projects.vue', () => {
    const wrapper = shallowMount(ProjectsView, {
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    const h2 = wrapper.findAll('section')
    expect(h2.length).toBe(4)
  })
})

/* describe('check if an image tag exist', () => {
  it('should have only 4 img tag in projects.vue', () => {
    const wrapper = shallowMount(AppNavbar, {
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    expect(wrapper.html()).toContain('projects')
  })
})
 */

/* const project = {
  projectName: 'Sample Project 1',
  testPhrase: 'This is a test.'
}

const wrapper = shallowMount(ProjectsView, {
  global: {
    components: {
      'router-link': RouterLinkStub
    }
  }
}) */

describe('AppNavbar.vue', () => {
  test('renders inner text', () => {
    const project = {
      projectName: 'Sample Project 1',
      testPhrase: 'This is a test.'
    }

    const wrapper = shallowMount(ProjectsView, {
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    const projectTitle = wrapper.findAll('.project-wrapper')
    const testSmall = wrapper.find('small')
    expect(testSmall.text()).toBe(project.testPhrase)
    expect(projectTitle.length).toBe(4)
  })
})
