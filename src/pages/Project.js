import { useParams } from 'react-router-dom'
import { projects } from '../projects';
import Page404 from './404';
import { PageWrapper } from './Pages.styled';

function Project(){

  const params = useParams();

  if(!Object.keys(projects).includes(params.id)){
    return <Page404 />
  }
  
  return (
    <PageWrapper>
      <h1>{`this is project ${params?.id}`}</h1>
      {projects[params.id]}
    </PageWrapper>
  );
}

export default Project;