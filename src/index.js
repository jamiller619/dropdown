import React from 'react'
import { useSelect } from 'downshift'

const Label = getLabelProps => ({ children, ...props }) => {
  return (
    <label {...getLabelProps()} {...props}>
      {children}
    </label>
  )
}

const Button = getToggleButtonProps => ({ children, ...props }) => {
  return (
    <button type="button" {...getToggleButtonProps()} {...props}>
      {children}
    </button>
  )
}

const MenuList = getMenuProps => ({ children, ...props }) => {
  return (
    <ul {...getMenuProps()} {...props}>
      {children}
    </ul>
  )
}

const MenuListItem = getItemProps => ({ children, ...props }) => {
  return (
    <li {...getItemProps()} {...props}>
      {children}
    </li>
  )
}

const MenuListItems = (getItemProps, items, highlightedIndex) => props => {
  return items.map((item, index) => (
    <li key={`${item}${index}`} {...getItemProps({ item, index })} {...props}>
      {item}
    </li>
  ))
}

const Dropdown = ({ items, children }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items })

  const label = Label(getLabelProps)
  const button = Button(getToggleButtonProps)
  const menuList = MenuList(getMenuProps)
  const menuListItems = MenuListItems(getItemProps, items)

  return children(label, button, menuList, menuListItems)
}

export default Dropdown
