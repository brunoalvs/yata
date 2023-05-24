import * as S from './styles'

interface DropdownnMenuProps {
  isOpen?: boolean
  items?: Array<{
    name: string
    onClick: () => void
  }>
}

const DropdownnMenu = ({ items, isOpen }: DropdownnMenuProps) => (
  <S.Container
    role='listbox'
    aria-hidden={isOpen}
  >
    {items?.map((item, index) => (
      <li
        key={index}
        onClick={item.onClick}
        role='option'
      >
        {item.name}
      </li>
    ))}
  </S.Container>
)

export default DropdownnMenu
