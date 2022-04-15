import { Choices } from "./styles"

const SidebarChoice = ({title, Icon = null}) => {
  return (
    <Choices>
      { Icon && <Icon/> }
      { Icon ? <h5>{title}</h5> : <p>{title}</p>} 
    </Choices>
  )
}

export default SidebarChoice