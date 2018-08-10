import React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';


const styles = StyleSheet.create({
  toc: {
    color: 'rgba(0, 0, 0, 0.8)',
    marginLeft: -24,
    marginTop: '2em',
    marginBottom: '2em',
  },
  entries: {
    paddingLeft: 24,
  },
  entry: {
    display: 'block',
    marginBottom: 12,
    cursor: 'pointer',
    color: '#1976D2',
    '&:hover': {
      color: '#0D47A1',
    },
  },
});


const Entries = ({
  entries,
}) => {
  return (
    <div className={css(styles.entries)}>
      {entries.map((entry) => {
        if (entry.title) {
          return (
            <a key={entry.title} className={css(styles.entry)} href={`#${entry.url}`}>
              › &nbsp;{entry.title}
            </a>
          );
        }
        else if (entry.entries) {
          return (
            <Entries key={entries} entries={entry.entries} />
          );
        }
      })}
    </div>
  );
};


const Toc = ({
  __entries,
}) => {
  return (
    <div className={css(styles.toc)}>
      <Entries entries={__entries} />
    </div>
  );
};


export default Toc;
