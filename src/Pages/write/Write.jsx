import React from 'react'
import './write.css'

const Write = () => {
  return (
    <div className="write__section">
        <img src={"https://blog.feedspot.com/wp-content/uploads/2016/08/technology.jpeg"} alt="" className="write__image" />
      <form className="write__form">
        <div className="write__formgroup">
          <label htmlFor="fileInput">
            <i class="fa-solid fa-plus write__input__file__icon"></i>
          </label>
          <input type="file" id="fileInput" className="write__input__file" />
          <input
            type="text"
            placeholder="Enter Title"
            className="write__input__text"
            autoFocus={true}
          />
        </div>
        <div className="write__formgroup">
            <textarea placeholder="Write Blog Description" type="text" className="wirte__textarea write__input__text"></textarea>
        </div>
        <button className="wirte__submit">Publish</button>
      </form>
    </div>
  )
}

export default Write
