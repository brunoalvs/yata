import * as S from './styles'

interface DropdownnMenuProps {
  isOpen?: boolean
  items?: Array<{
    name: string
    onClick: () => void
  }>
}

const DropdownnMenu = ({ items, isOpen }: DropdownnMenuProps) => (
  <S.Container role="listbox" aria-hidden={isOpen}>
    {items?.map((item, index) => (
      <S.Item
        key={index}
        onClick={item.onClick}
        role="option"
        aria-hidden={isOpen}
      >
        {item.name}
      </S.Item>
    ))}
  </S.Container>
)

export default DropdownnMenu
