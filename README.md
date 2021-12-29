<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## 🎼 react-accordion

![paccord](https://user-images.githubusercontent.com/74355328/147672813-183005df-ba49-414d-ba02-cb6b9c8285ef.gif)

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


<참고>
Coding Addict
