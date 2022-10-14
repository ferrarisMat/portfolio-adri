import { StyledLink } from './ProjectLink.styled';

function ProjectLink(props){
  const { id, children, onMouseOver, onMouseLeave } = props;

  return (
    <StyledLink to={id}>{children}</StyledLink>
  )
}

export default ProjectLink;
