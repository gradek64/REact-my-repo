import React, { ReactNode } from 'react'
import { Modal } from '@sainsburys-tech/bolt'
import { RenderResult, render } from '.'

export const renderWithModalWrapper = (children: ReactNode, renderOptions = {}, modalProps = {}): RenderResult =>
  render(
    <Modal show {...modalProps}>
      {children}
    </Modal>,
    renderOptions,
  )
