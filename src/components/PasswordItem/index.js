import './index.css'

const PasswordItem = prop => {
  const {eachPassword, deleted, checkboxVerify} = prop
  const {id, website, username, passwordInp} = eachPassword

  const deleting = () => {
    deleted(id)
  }

  return (
    <li>
      <div className="listCard">
        <p className="startName">{website[0].toUpperCase()}</p>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          {checkboxVerify === true && <p>{passwordInp}</p>}
          {checkboxVerify === false && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="starImg"
            />
          )}
        </div>
      </div>
      <button type="button" onClick={deleting} className="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteImg"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
