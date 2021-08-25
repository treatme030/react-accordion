## 🎼 react-accordion
버튼 클릭시 설명부분 보여주고, 감추기
```javascript
  <article className="question">
      <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
              { showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> }
          </button>
      </header>
      { showInfo && <p>{info}</p> }
  </article>
  ```
