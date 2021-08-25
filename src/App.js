import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './SingleQuestion';

function App() {
  const [questions, setQuertions] = useState(data)
  return (
    <main>
      <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {
              questions.map(question => <SingleQuestion key={question.id} {...question}/>)
            }
          </section>
      </div>
    </main>
  );
}

export default App;
