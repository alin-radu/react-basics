import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMpurify from 'dompurify';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term,
  //       },
  //     });
  //     setResults(data.query.search);
  //   };
  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term, results.length]);

  const cleanerHTML = (input) => {
    const cleaningInput = DOMpurify.sanitize;
    return (
      <span dangerouslySetInnerHTML={{ __html: cleaningInput(input) }}></span>
    );
  };

  const renderedResults = results.map((el) => {
    return (
      <div key={el.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${el.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="header">{el.title}</div>
        <div className="content">{cleanerHTML(el.snippet)}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
