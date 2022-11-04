import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewBetModal: () => void
}

export function Header({ onOpenNewBetModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt banking" />
        <button type="button" onClick={onOpenNewBetModal}>
          Nova entrada
        </button>
      </Content>
    </Container>
  )
}
