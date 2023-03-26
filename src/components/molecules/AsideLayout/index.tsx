import * as S from './styles'

interface AsideLayoutProps {
  children: React.ReactNode;
  isOpen: boolean;
  direction?: 'left' | 'right';
  onClose?: () => void;
}

const AsideLayout = ({ children, isOpen, ...props }: AsideLayoutProps) => (
  <>
    <S.Container isOpen={ isOpen } direction={ props.direction }>
      { children }
    </S.Container>
    <S.Overlay onClick={ () => props.onClose() } isOpen={ isOpen } direction={ props.direction } />
  </>
)

export default AsideLayout
