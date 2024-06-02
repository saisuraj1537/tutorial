import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  constructor(props) {
    super(props)
    const {passList} = props
    this.state = {
      passwordList: passList,
      website: '',
      username: '',
      passwordInp: '',
      searchValue: '',
      checkbox: false,
    }
  }

  websiteChange = event => {
    this.setState({website: event.target.value})
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({passwordInp: event.target.value})
  }

  searchChange = event => {
    this.setState({searchValue: event.target.value})
  }

  //   addItemInList = () => {
  //     const {website, username, passwordInp} = this.state
  //     this.setState(prevState => ({
  //       passwordList: [
  //         ...prevState.passwordList,
  //         {website, username, passwordInp, id: uuidv4()},
  //       ],
  //     }))
  //     this.setState({website: '', username: '', passwordInp: ''})
  //   }

  deletePass = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  checkboxChange = () => {
    const {checkbox} = this.state
    this.setState({checkbox: !checkbox})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {website, username, passwordInp} = this.state
    this.setState(prevState => ({
      passwordList: [
        ...prevState.passwordList,
        {website, username, passwordInp, id: uuidv4()},
      ],
    }))
    this.setState({website: '', username: '', passwordInp: ''})
  }

  render() {
    const {website, username, passwordInp, searchValue, checkbox} = this.state

    let {passwordList} = this.state

    passwordList = passwordList.filter(eachList =>
      eachList.website.includes(searchValue),
    )

    return (
      <div className="bg">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="mainImg"
          />
          <div className="wupMainCard">
            <div className="wupCard">
              <h2>Add New Password</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="inputCard">
                  <div className="imgCard">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="input_img"
                    />
                  </div>

                  <input
                    placeholder="Enter Website"
                    className="inputEl"
                    onChange={this.websiteChange}
                    value={website}
                    type="text"
                  />
                </div>
                <div className="inputCard">
                  <div className="imgCard">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="input_img"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="inputEl"
                    onChange={this.usernameChange}
                    value={username}
                  />
                </div>
                <div className="inputCard">
                  <div className="imgCard">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="input_img"
                    />
                  </div>

                  <input
                    placeholder="Enter Password"
                    type="password"
                    className="inputEl"
                    onChange={this.passwordChange}
                    value={passwordInp}
                  />
                </div>
                <button
                  type="submit"
                  onClick={this.addItemInList}
                  className="addButton"
                >
                  Add
                </button>
              </form>
            </div>
            <div className="pMImCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="pMImg"
              />
            </div>
          </div>
          <div className="passItemCard">
            <div className="passTextCard">
              <div className="passLength">
                <h2>Your Passwords</h2>
                <p className="length">{passwordList.length}</p>
              </div>
              <div className="searchMainCard">
                <div className="searchCard">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="searchImg"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Enter Password"
                  className="inputSearchEl"
                  onChange={this.searchChange}
                  value={searchValue}
                />
              </div>
            </div>
            <hr />
            <div className="checkboxContainer">
              <label className="checkboxCard">
                <input type="checkbox" onClick={this.checkboxChange} />
                Show Passwords
              </label>
            </div>
            {passwordList.length !== 0 && (
              <ul>
                {passwordList.map(eachPass => (
                  <PasswordItem
                    key={eachPass.id}
                    eachPassword={eachPass}
                    deleted={this.deletePass}
                    checkboxVerify={checkbox}
                  />
                ))}
              </ul>
            )}
            {passwordList.length === 0 && (
              <div className="noPassCard">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="noPassImg"
                  />
                  <p className="noPassText">No Passwords</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
