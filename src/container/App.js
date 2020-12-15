import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { PrimaryButton } from "../component/PrimaryButton";
import { Header } from "../component/Header.js";
import { Item } from "../component/ContainerItem";
import { lightTheme, darkTheme } from "../utils/theme";
import { timeDiff } from "../utils/utils";
import { Loader } from "../component/Loader";

function App() {
  const [jobs, setJobs] = useState([]);
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState(1);
  const [loaderVisibility, setLoaderVisibility] = useState(false);

  useEffect(() => {
    setLoaderVisibility(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach(d => {
          d.created_at = timeDiff(d.created_at);
        });
        setJobs(jobs => ([...jobs, ...data]))
        setLoaderVisibility(false);
      });
  },[page]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}/>
        <div className="section">
        {loaderVisibility && (
            <Loader/>
        )}
        
          <div className="container">
            {jobs.map((job) => {
              return (
                <Item job={job} key={job.id}/>
              );
            })}
          </div>
          {!loaderVisibility && (
            <PrimaryButton
            className="center-align"
            onClick={() => setPage(page + 1)}
          >
            Load more
          </PrimaryButton>
          )}
          
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;