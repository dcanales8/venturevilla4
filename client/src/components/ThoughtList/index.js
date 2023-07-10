import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Ventures Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header text-dark p-2 m-0"  style={{ background: '#f7e70c' }}>
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    added this venture to their bucklist on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You added this venture to your bucklist on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn btn-block btn-squared"  style={{ background: '#f7e70c' }}
              to={`/thoughts/${thought._id}`}
            >
              Give some recommendations for this venture villa location.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
