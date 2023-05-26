import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages/index'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the page heading correctly', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Yes! Another Todo App/i,
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })

  it('paragraphs is rendered correctly', () => {
    render(<Home />)

    const paragraphs = [
      'Yata is a web application that allows you to manage your tasks in a simple and intuitive way. Stop wasting time and start achieving your goals with our Todo App.',
      'Sign up today and experience the power of efficient task management!',
    ]

    paragraphs.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument()
    })
  })

  it('button render correctly', () => {
    render(<Home />)

    const button = screen.getByRole('button', {
      name: /Get Started/i,
    })

    expect(button).toBeInTheDocument()
  })

  it('navigates to signup page when Get Started button is clicked', () => {
    mockRouter.push('/')
    render(<Home />)

    const button = screen.getByRole('button', {
      name: /Get Started/i,
    })
    fireEvent.click(button)

    expect(mockRouter.pathname).toBe('/signup')
  })
})
