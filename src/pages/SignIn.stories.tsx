import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './SignIn'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req: any, res: any, ctx: any) => {
          return res(ctx.json({
            message: 'Login successfully'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  // canvasElement is the main element of a component
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'denisgmarques@hotmail.com')
    userEvent.type(canvas.getByPlaceholderText('******'), '1234567890')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
