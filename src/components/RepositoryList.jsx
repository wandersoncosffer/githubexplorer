import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/wandersoncosffer/repos')
    .then(res => res.json())
    .then(data => {
      setRepositories(data);
    },[]);
  });

  return(
    <section className="repository-list">   
      
      <h1>Github explorer</h1>

        <ul>  
          { 
            repositories.slice(0, 5).map((repository) => {
              return <RepositoryItem key={repository.id} repository={repository} />
            })
          }
        </ul>
        

    </section>
  );
}