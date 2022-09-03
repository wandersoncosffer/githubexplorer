import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){

  const [repositories, setRepositories] = useState<Repository[]>([]);
  
  useEffect(()=>{
    fetch('https://api.github.com/users/wandersoncosffer/repos')
    .then(res => res.json())
    .then(data => setRepositories(data));
  },[]);

  return(
    <section className="repository-list">   
      
      <h1>Github explorer</h1>

        <ul>  
          { 
            repositories.slice(0, 5).map((repository) => {
              return <RepositoryItem key={repository.name} repository={repository} />
            })
          }
        </ul>
        

    </section>
  );
}